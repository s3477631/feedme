import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'food',
        loadChildren: () => import('../food/food.module').then(m => m.FoodPageModule)
      },
      {
        path: 'drink',
        loadChildren: () => import('../drink/drink.module').then(m => m.DrinkPageModule)
      },
      {
        path: 'order',
        loadChildren: () => import('../order/order.module').then(m => m.OrderPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/food',
        pathMatch: 'full'
      }
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
