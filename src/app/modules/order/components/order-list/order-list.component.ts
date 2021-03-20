import {Component, OnInit} from '@angular/core';
import {OrderStateFacade} from '../../../../facade/order-state.facade';
import {LocalStorageService} from 'ngx-webstorage';
import {ProductDto} from '../../../../model/product.dto';
import {DemoMenuService} from '../../../../services/demo-menu/demo-menu.service';
import {MenuServiceService} from '../../../../services/menu-service.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-order-list',
    templateUrl: './order-list.component.html',
    styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
    public orders: ProductDto[];
    constructor(private orderStateFacade: OrderStateFacade,
                public orderService: MenuServiceService,
                public menuService: MenuServiceService,
                private localStorage: LocalStorageService) {
    }

    ngOnInit() {
        // this.orderStateFacade.initializeListeners();
        // const order = this.localStorage.retrieve('order');
        // this.orders = JSON.parse(order);
        // this.orders = this.orderStateFacade.allOrders;
        // console.log(this.orders);
    }

}
