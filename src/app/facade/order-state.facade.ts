import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {OrderState} from '../store/state/order.state';

import {OrderDto} from '../model/order.dto';

import * as orderSelectors from '../store/selectors/order.selector';
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

    constructor(private store: Store<OrderState>) {
    }

    public initializeListeners(): void {
        this.allOrders = this.store.pipe(select(orderSelectors.orderSelector));
        this.orderQuantity = this.store.pipe(select(orderSelectors.orderQuantity));
        this.totalOrder = this.store.pipe(select(orderSelectors.totalOrderCost));
        this.menuItems = this.store.pipe(select(orderSelectors.menuListSelector));
        this.menuGroupItems = this.store.pipe(select(orderSelectors.menuGroupItems));
    }

    public addOrder(newOrder: ProductDto): void {
        this.store.dispatch({type: OrderActionsEnum.ADD_ORDER_ITEM, order: newOrder});
        this.store.dispatch({type: OrderActionsEnum.TOTAL_ORDER_COST, totalOrderCost: newOrder});
        this.store.dispatch({type: OrderActionsEnum.INCREMENT_ORDER_ITEM});
    }

    public removeOrderItem(orderItem: ProductDto): void {
        this.store.dispatch({type: OrderActionsEnum.DECREMENT_ORDER_ITEM, order: orderItem});
    }

    public loadMenuItems(group: number): void {
        this.store.dispatch({type: OrderActionsEnum.LOAD_MENU, groupId: group});
        this.store.dispatch({type: OrderActionsEnum.CLEAR_MENU_GROUP});
    }


    public loadMenuGroups(): void {
        this.store.dispatch({type: OrderActionsEnum.LOAD_MENU_GROUPS});
    }
}
