import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { FoodPage } from './food.page';

import {FoodPageRoutingModule} from './food-routing.module';
import {FoodListComponent} from './food-list/food-list.component';
import {SharedModule} from '../shared-module';
import {FoodDetailComponent} from './food-detail/food-detail.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    FoodPageRoutingModule
  ],
  declarations: []
})
export class FoodPageModule {}
