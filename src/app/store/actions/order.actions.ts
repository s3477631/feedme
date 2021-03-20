import {createAction, props} from '@ngrx/store';

import {OrderActionsEnum} from '../enums/order.actions.enum';
import {ProductDto} from '../../model/product.dto';


export const addOrderItem = createAction(OrderActionsEnum.ADD_ORDER_ITEM, props<{ addOrderItem: ProductDto }>());
export const addOrderItemSuccess = createAction(OrderActionsEnum.ADD_ORDER_ITEM_SUCCESS,
    props<{ addOrderItem: ProductDto[] }>());

export const incrementOrderQuantity = createAction(OrderActionsEnum.INCREMENT_ORDER_ITEM);

export const incrementOrderQuantitySuccess = createAction(OrderActionsEnum.INCREMENT_ORDER_ITEM_SUCCESS,
    props<{ quantity: number }>());

export const decrementOrderQuantity = createAction(OrderActionsEnum.DECREMENT_ORDER_ITEM,
    props<{ order: ProductDto }>()
);

export const decrementOrderQuantitySuccess = createAction(OrderActionsEnum.DECREMENT_ORDER_ITEM_SUCCESS,
    props<{ order: ProductDto[] }>()
);

export const totalOrderCost = createAction(OrderActionsEnum.TOTAL_ORDER_COST,
    props<{ order: ProductDto }>()
);

export const totalOrderCostSuccess = createAction(OrderActionsEnum.TOTAL_ORDER_COST_SUCCESS,
    props<{ totalOrderCost: number }>()
);

