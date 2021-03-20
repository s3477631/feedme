import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {FoodPage} from '../food/food.page';
import {DrinkPage} from '../drink/drink.page';
import {FoodListComponent} from '../food/food-list/food-list.component';
import {ItemListComponent} from '../components/item-list/item-list.component';
import {DrinkListComponent} from '../drink/drink-list/drink-list.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'food',
        component:  FoodPage,
        children: [{
            path: '',
            pathMatch: 'full',
            component: ItemListComponent
            },
            {
          path: 'menu/:groupId',
          component: FoodListComponent
        }]
      },
      {
        path: 'drink',
        component: DrinkPage,
        children: [{
          path: '',
          pathMatch: 'full',
          component: ItemListComponent
        },
          {
            path: 'menu/:groupId',
            component: DrinkListComponent
          }]
      },
      {
        path: 'order',
        loadChildren: () => import('../order/order.module').then(m => m.OrderPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/food',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
