import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FoodPage } from './food.page';

import {FoodPageRoutingModule} from './food-routing.module';
import {FoodListComponent} from './food-list/food-list.component';
import {SharedModule} from '../shared-module';
import {NgxUsefulSwiperModule} from 'ngx-useful-swiper';
import {FoodDetailComponent} from './food-detail/food-detail.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    FoodPageRoutingModule,
      NgxUsefulSwiperModule
  ],
  declarations: [FoodPage, FoodListComponent, FoodDetailComponent]
})
export class FoodPageModule {}
