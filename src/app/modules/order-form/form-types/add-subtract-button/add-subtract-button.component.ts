import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-add-subtract-button',
    templateUrl: './add-subtract-button.component.html',
    styleUrls: ['./add-subtract-button.component.scss'],
})
export class AddSubtractButtonComponent implements OnInit {
    @Input()
    orderItem;

    @Input()
    parentForm: FormGroup;

    constructor() {
    }

    ngOnInit() {
        console.log(this.orderItem.value)
        this.parentForm.valueChanges.subscribe(value => console.log(value));
    }

    public decreaseItem(formItem): void {
        this.parentForm.controls[formItem].patchValue(this.orderItem.value -= 1);
    }

    public increaseItem(formItem): void {
        this.parentForm.controls[formItem].patchValue(this.orderItem.value += 1);
    }
}
