import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {OrderState} from '../store/state/order.state';

import {OrderDto} from '../model/order.dto';

import * as orderSelectors from '../store/selectors/order.selector';

import * as OrderActions from '../store/actions/order.actions';

import {Observable} from 'rxjs';
import {OrderActionsEnum} from '../store/enums/order.actions.enum';
import {ProductDto} from '../model/product.dto';
import {GroupingDto} from '../model/grouping.dto';


@Injectable({
    providedIn: 'root'
})
export class OrderStateFacade {

    public allOrders;
    public orderQuantity: Observable<number>;
    public totalOrder: Observable<number>;
    public menuItems: Observable<ProductDto[]>;
    public menuGroupItems: Observable<GroupingDto[]>;
    public groupTitle: Observable<string>;

    constructor(private store: Store<OrderState>) {
    }

    public initializeListeners(): void {
        // this.allOrders = this.store.pipe(select(orderSelectors.orderSelector));
        this.orderQuantity = this.store.pipe(select(orderSelectors.orderQuantity));
        this.totalOrder = this.store.pipe(select(orderSelectors.totalOrderCost));
    }

    public addOrder(newOrder: ProductDto): void {
        this.store.dispatch({type: OrderActionsEnum.ADD_ORDER_ITEM, order: newOrder});
        this.store.dispatch({type: OrderActionsEnum.TOTAL_ORDER_COST, totalOrderCost: newOrder});
        this.store.dispatch({type: OrderActionsEnum.INCREMENT_ORDER_ITEM});
    }

    public removeOrderItem(orderItem: ProductDto): void {
        this.store.dispatch({type: OrderActionsEnum.DECREMENT_ORDER_ITEM, order: orderItem});
    }
    // public getOrder(): void {
    //     this.store.dispatch(OrderActions.getOrders());
    // }
    // public showOrders(): Observable<ProductDto[]>{
    //     return this.store.pipe(select(orderSelectors.orderSelector));
    // }
}
