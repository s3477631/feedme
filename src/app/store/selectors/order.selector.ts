import {createFeatureSelector, createSelector} from '@ngrx/store';
import {OrderState} from '../state/order.state';


export const selectOrderState = createFeatureSelector<OrderState>('orderState');

export const orderQuantity = createSelector(selectOrderState,
    (orderState: OrderState) => orderState.orderItemQuantity
);
export const totalOrderCost = createSelector(selectOrderState,
    (orderState: OrderState) => orderState.totalOrderCost
);
