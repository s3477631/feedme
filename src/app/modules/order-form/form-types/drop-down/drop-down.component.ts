import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
})
export class DropDownComponent implements OnInit {
  @Input()
  orderItems;
  @Input()
  parentForm: FormGroup;
  constructor() { }

  ngOnInit() {
    console.log(this.orderItems)
  }

}
