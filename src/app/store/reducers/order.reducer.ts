import {createReducer, on, Action} from '@ngrx/store';

import {initialOrderState, OrderState} from '../state/order.state';
import * as OrderActions from '../actions/order.actions';


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
    })
);


export function orderReducer(state: OrderState | undefined, action: Action) {
    return orderStateReducer(state, action);
}
