import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductComponent} from './components/product/product.component';
import {GroupItemsComponent} from './components/group-items/group-items.component';
import {OrderFormComponent} from './order-form/order-form.component';
import {AddSubtractButtonComponent} from './order-form/form-types/add-subtract-button/add-subtract-button.component';
import {DropDownComponent} from './order-form/form-types/drop-down/drop-down.component';



@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        ProductComponent,
        GroupItemsComponent,
        OrderFormComponent,
        AddSubtractButtonComponent,
        DropDownComponent
    ],
    exports: [
        ProductComponent,
        GroupItemsComponent,
        OrderFormComponent,
        AddSubtractButtonComponent
    ]
})
export class SharedModule {}
