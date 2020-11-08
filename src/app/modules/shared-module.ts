import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductComponent} from './components/product/product.component';
import {GroupItemsComponent} from './components/group-items/group-items.component';
import {OrderFormComponent} from './order-form/order-form.component';
import {AddSubtractButtonComponent} from './order-form/form-types/add-subtract-button/add-subtract-button.component';
import {DropDownComponent} from './order-form/form-types/drop-down/drop-down.component';
import {ItemListComponent} from './components/item-list/item-list.component';
import {NgxUsefulSwiperModule} from 'ngx-useful-swiper';



@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        NgxUsefulSwiperModule,
        ReactiveFormsModule,
    ],
    declarations: [
        ProductComponent,
        GroupItemsComponent,
        OrderFormComponent,
        AddSubtractButtonComponent,
        DropDownComponent,
        ItemListComponent
    ],
    exports: [
        NgxUsefulSwiperModule,
        ProductComponent,
        GroupItemsComponent,
        OrderFormComponent,
        AddSubtractButtonComponent,
        ItemListComponent
    ]
})
export class SharedModule {}
