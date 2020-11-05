import {createAction, props} from '@ngrx/store';

import {OrderActionsEnum} from '../enums/order.actions.enum';
import {OrderDto} from '../../model/order.dto';
import {ProductDto} from '../../model/product.dto';
import {GroupingDto} from '../../model/grouping.dto';

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

export const loadMenuGroups = createAction(OrderActionsEnum.LOAD_MENU_GROUPS);

export const loadMenuGroupSuccess = createAction(OrderActionsEnum.LOAD_MENU_GROUPS_SUCCESS,
    props<{ menuGroupItems: GroupingDto[] }>()
);

export const clearMenuGroups = createAction(OrderActionsEnum.CLEAR_MENU_GROUP);
export const clearMenuGroupSuccess = createAction(OrderActionsEnum.CLEAR_MENU_GROUP_SUCCESS);

export const loadMenuItems = createAction(OrderActionsEnum.LOAD_MENU,
    props<{ groupId: number }>()
);

export const loadMenuItemSuccess = createAction(OrderActionsEnum.LOAD_MENU_SUCCESS,
    props<{ menuList: ProductDto[] }>()
);
