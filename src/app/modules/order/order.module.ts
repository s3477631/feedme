import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {OrderPage} from './order.page';
import {OrderPageRoutingModule} from './order-routing.module';
import {OrderListComponent} from './components/order-list/order-list.component';
import {SharedModule} from '../shared-module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        SharedModule,
        RouterModule.forChild([{path: '', component: OrderPage}]),
        OrderPageRoutingModule,
    ],
    declarations: [OrderPage, OrderListComponent]
})
export class OrderPageModule {
}
