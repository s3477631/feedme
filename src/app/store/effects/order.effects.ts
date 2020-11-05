import {EMPTY, forkJoin, from, Observable, of, zip} from 'rxjs';
import {Injectable} from '@angular/core';
import {mergeMap, catchError, concatMap, withLatestFrom, switchMap, map, tap, filter, groupBy, toArray} from 'rxjs/operators';

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {OrderActionsEnum} from '../enums/order.actions.enum';

import {Store} from '@ngrx/store';
import {OrderState} from '../state/order.state';


import * as OrderActions from '../actions/order.actions';
import * as OrderSelector from '../selectors/order.selector';
import {ProductDto} from '../../model/product.dto';
import {MenuServiceService} from '../../services/menu-service.service';
import {GroupingDto} from '../../model/grouping.dto';


@Injectable()
export class OrderEffects {
    // public addOrderQuantity$ = createEffect(() => this.actions.pipe(
    //     ofType(OrderActions.addOrderItem),
    //     map((activity) => ({type: OrderActionsEnum.ADD_ORDER_ITEM_SUCCESS, addOrderItem: activity})),
    //     catchError((error) => {
    //         return EMPTY;
    //     })
    // ));
    public loadMenuList$ = createEffect(() => this.actions.pipe(
        ofType(OrderActions.loadMenuItems),
        switchMap((action) => this.loadMenu(action.groupId).pipe(
            map((activity) => ({type: OrderActionsEnum.LOAD_MENU_SUCCESS, menuList: activity})),
            catchError((errorParam) => {
                return EMPTY;
            })
        ))
    ));
    public loadMenuGroupList$ = createEffect(() => this.actions.pipe(
        ofType(OrderActions.loadMenuGroups),
        switchMap((action) => of(action).pipe(
            mergeMap(() => this.loadMenuGroups().pipe(
                map((activity) => ({type: OrderActionsEnum.LOAD_MENU_GROUPS_SUCCESS, menuGroupItems: activity})),
                catchError((errorParam) => {
                    return EMPTY;
                })
            ))
        ))
    ));
    public deselectItems$ = createEffect(() => this.actions.pipe(
        ofType(OrderActions.clearMenuGroups),
        map(action => ({type: OrderActionsEnum.CLEAR_MENU_GROUP_SUCCESS}))
    ));
    public increaseTotalOrderQuantity$ = createEffect(() => this.actions.pipe(
        ofType(OrderActions.incrementOrderQuantity),
        switchMap((action) => of(action).pipe(
            withLatestFrom(this.store.select(OrderSelector.orderQuantity)),
            mergeMap(([actionParam, selectorParams]) => this.increaseTotalQuantity(selectorParams).pipe(
                map((activity) => ({type: OrderActionsEnum.INCREMENT_ORDER_ITEM_SUCCESS, quantity: activity})),
                catchError((errorParam) => {
                    return EMPTY;
                })
            ))
        ))
    ));


    public addOrder$ = createEffect(() => this.actions.pipe(
        ofType(OrderActions.addOrderItem),
        mergeMap((action) => of(action).pipe(
            withLatestFrom(this.store.select(OrderSelector.orderSelector)),
            mergeMap(([newOrderItem, currentOrderItems]) => this.addToOrder(newOrderItem, currentOrderItems).pipe(
                map((activity) => (
                    {type: OrderActionsEnum.ADD_ORDER_ITEM_SUCCESS, addOrderItem: activity}
                )),
                catchError((errorParam) => {
                    return EMPTY;
                })
            ))
        ))
    ));
    public addUpOrderTotal$ = createEffect(() => this.actions.pipe(
        ofType(OrderActions.totalOrderCost),
        mergeMap((action) => of(action).pipe(
            withLatestFrom(this.store.select(OrderSelector.totalOrderCost)),
            mergeMap(([newOrderItem, currentOrderItems]) => this.addUpTotal(newOrderItem, currentOrderItems).pipe(
                map((activity) => (
                    {type: OrderActionsEnum.TOTAL_ORDER_COST_SUCCESS, totalOrderCost: activity}
                )),
                catchError((errorParam) => {
                    return EMPTY;
                })
            ))
        ))
    ));


    public removeItem$ = createEffect(() => this.actions.pipe(
        ofType(OrderActions.decrementOrderQuantity),
        switchMap((action) => of(action).pipe(
            withLatestFrom(this.store.select(OrderSelector.orderSelector)),
            mergeMap(([currentOrder, orderItem]) => this.decrementOrderItem(currentOrder, orderItem).pipe(
                map((updatedOrder) => ({type: OrderActionsEnum.TOTAL_ORDER_COST_SUCCESS, order: updatedOrder})),
                catchError((errorParam) => {
                    return EMPTY;
                })
            ))
        ))
    ));

    private loadMenu(menuGroup: number): Observable<ProductDto[]> {
        console.log(menuGroup);
        const menuItems = this.menuService.getMenuItems(menuGroup);
        return menuItems;
    }

    private loadMenuGroups(): Observable<GroupingDto[]> {
        const menuGroups = this.menuService.getMenuGroups();
        menuGroups.subscribe(val => console.log(val));
        return menuGroups;
    }

    private decrementOrderItem(newOrder, currentOrder) {
        const updateCurrent = currentOrder[0];
        return of([({...updateCurrent, quantity: updateCurrent.quantity - 1})]);
    }

    increaseTotalQuantity(selectorParams) {
        return of(selectorParams + 1);
    }

    private addUpTotal(newOrder, currentOrder) {
        const priceTransform = newOrder.totalOrderCost.price.replace('$', '');
        const priceInt = parseFloat(priceTransform) + currentOrder;
        return of(priceInt);
    }

    private addToOrder(newOrder, currentOrder): Observable<ProductDto[]> {
        const firstItem = of([newOrder.order]);
        if (currentOrder !== undefined) {
            const addOrder = currentOrder.filter(order => order.id === newOrder.order.id).map(item => {
                return ({...item, quantity: item.quantity + 1});
            });
            if (addOrder.length !== 0) {
                const unOptimized = [...currentOrder, ...addOrder];
                const uniqueOrderWithNewestFirst = Array.from(new Set(unOptimized.reverse().map(a => a.id)))
                    .map(id => {
                        return unOptimized.find(a => a.id === id);
                    });
                return of(uniqueOrderWithNewestFirst);
            } else {
                return of([...currentOrder, newOrder.order]);
            }


        } else if (currentOrder === undefined) {
            return firstItem;
        }
    }


    constructor(
        private actions: Actions,
        private menuService: MenuServiceService,
        private store: Store<OrderState>,
    ) {
    }

}
