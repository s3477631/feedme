import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DrinkPage } from './drink.page';
import {DrinkPageRoutingModule} from './drink-routing.module';
import {OrderPageModule} from '../shared-module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    DrinkPageRoutingModule,
    OrderPageModule
  ],
  declarations: [DrinkPage]
})
export class DrinkPageModule {}
