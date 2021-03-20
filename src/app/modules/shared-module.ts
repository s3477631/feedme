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
import {FoodPage} from './food/food.page';
import {FoodListComponent} from './food/food-list/food-list.component';
import {FoodDetailComponent} from './food/food-detail/food-detail.component';
import {DrinkPage} from './drink/drink.page';
import {DrinkListComponent} from './drink/drink-list/drink-list.component';
import {RouterModule} from '@angular/router';
import {DrinkDetailComponent} from './drink/drink-detail/drink-detail.component';



@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        NgxUsefulSwiperModule,
        ReactiveFormsModule,
        RouterModule,
    ],
    declarations: [
        ProductComponent,
        GroupItemsComponent,
        OrderFormComponent,
        AddSubtractButtonComponent,
        DropDownComponent,
        ItemListComponent,
        FoodPage,
        FoodListComponent,
        FoodDetailComponent,
        DrinkDetailComponent,
        DrinkPage,
        DrinkListComponent
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
