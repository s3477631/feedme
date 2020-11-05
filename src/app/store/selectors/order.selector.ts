import {createFeatureSelector, createSelector} from '@ngrx/store';
import {OrderState} from '../state/order.state';

export const selectOrderState = createFeatureSelector<OrderState>('orderState');

export const menuListSelector = createSelector(selectOrderState,
    (orderState: OrderState) => orderState.menuItems
);

export const orderSelector = createSelector(selectOrderState,
    (orderState: OrderState) => orderState.customerOrder
);
export const orderQuantity = createSelector(selectOrderState,
    (orderState: OrderState) => orderState.orderItemQuantity
);
export const totalOrderCost = createSelector(selectOrderState,
    (orderState: OrderState) => orderState.totalOrderCost
);
// export const menuDetailItems = createSelector(selectOrderState,
//     (orderState: OrderState) => orderState.menuDetailItems
// );
export const menuGroupItems = createSelector(selectOrderState,
    (orderState: OrderState) => orderState.menuGroupItems
);
