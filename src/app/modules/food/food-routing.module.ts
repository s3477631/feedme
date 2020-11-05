import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodPage } from './food.page';
import {FoodDetailComponent} from './food-detail/food-detail.component';

const routes: Routes = [
  {
    path: '',
    component: FoodPage,
  },
  {
    path: 'food-detail',
    component: FoodDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodPageRoutingModule {}
