import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DrinkPage } from './drink.page';
import {DrinkPageRoutingModule} from './drink-routing.module';
import { SharedModule} from '../shared-module';
import {HttpClientModule} from '@angular/common/http';
import {DrinkListComponent} from './drink-list/drink-list.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    DrinkPageRoutingModule,
    SharedModule
  ],
  declarations: [DrinkPage, DrinkListComponent]
})
export class DrinkPageModule {}
