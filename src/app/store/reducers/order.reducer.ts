import {createReducer, on, Action} from '@ngrx/store';

import {initialOrderState, OrderState} from '../state/order.state';
import * as OrderActions from '../actions/order.actions';
import {act} from '@ngrx/effects';

const orderStateReducer = createReducer(initialOrderState,
    on(OrderActions.addOrderItemSuccess, (state: OrderState, action) => {
        return {
            ...state,
            customerOrder: action.addOrderItem
        };
    }),
    on(OrderActions.incrementOrderQuantitySuccess, (state: OrderState, action) => {
        return {
            ...state,
            orderItemQuantity: action.quantity
        };
    }),
    on(OrderActions.decrementOrderQuantitySuccess, (state: OrderState, action) => {
        return {
            ...state,
            customerOrder: action.order
        };
    }),
    on(OrderActions.totalOrderCostSuccess, (state: OrderState, action) => {
        return {
            ...state,
            totalOrderCost: action.totalOrderCost
        };
    }),
    on(OrderActions.loadMenuItemSuccess, (state: OrderState, action) => {
        return {
            ...state,
            menuItems: action.menuList
        };
    }),
    on(OrderActions.loadMenuGroupSuccess, (state: OrderState, action) => {
        return {
            ...state,
            menuGroupItems: action.menuGroupItems
        };
    }),
    on(OrderActions.clearMenuGroupSuccess, ((state, action) => {
        return {
            ...state,
            menuGroupItems: undefined
        };
    })),
    on(OrderActions.loadMenuGroupTitle, ((state, action) => {
        return {
            ...state,
            groupName: action.groupName
        };
    })),
);


export function orderReducer(state: OrderState | undefined, action: Action) {
    return orderStateReducer(state, action);
}
