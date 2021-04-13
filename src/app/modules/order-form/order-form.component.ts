import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MenuServiceService} from '../../services/menu-service.service';

@Component({
    selector: 'app-order-form',
    templateUrl: './order-form.component.html',
    styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent implements OnInit {
    @Input()
    public orderItems;
    public orderForm: FormGroup;

    @Output()
    formItems = new EventEmitter();

    constructor() {
    }
    ngOnInit() {
        this.buildOrderForm();
        this.formItems.emit(this.orderForm.value);
    }
    public buildOrderForm(): void {
        const group: any = {};
        if (this.orderItems) {
            this.orderItems.forEach(orderItem => {
                const validators = [];
                if (orderItem.isRequired) {
                    validators.push(Validators.required);
                }
                if (orderItem?.constraintMin) {
                    validators.push(Validators.min(orderItem?.constraintMin));
                }
                if (orderItem?.constraintMax) {
                    validators.push(Validators.max(orderItem?.constraintMax));
                }
                group[orderItem.id] = new FormControl(orderItem.value, validators);
            });
        }
        this.orderForm = new FormGroup(group);
        this.subscribeOrderForm();
    }

    public subscribeOrderForm() {
        this.orderForm.valueChanges.subscribe(value => {
            this.formItems.emit(this.orderForm.value);
        });
    }

}
