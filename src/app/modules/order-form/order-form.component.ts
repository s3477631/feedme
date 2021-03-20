import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MenuServiceService} from '../../services/menu-service.service';

@Component({
    selector: 'app-order-form',
    templateUrl: './order-form.component.html',
    styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent implements OnInit {
    public orderItems = [
        {id: 'OrderQuantity', dataType: 'ADD_SUBTRACT', label: 'Quantity',
            value: 1, constraintMin: 1, constraintMax: 10, isRequired: false},
        {id: 'OrderSize', dataType: 'DROP_DOWN', value: 'small', menuOptions: [
                {size: 'small', value: 'small'},
                {size: 'medium', value: 'medium'},
                {size: 'large', value: 'large'},
                {size: 'extra large', value: 'xtra-large'}
                ]}];
    public orderForm: FormGroup;

    @Output()
    formItems = new EventEmitter();
    constructor() {
    }

    ngOnInit() {
        this.buildOrderForm();
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
            // console.log(value);
            this.formItems.emit(this.orderForm.value);
        });
    }

}
