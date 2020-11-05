import {ProductDto} from '../../model/product.dto';
import {GroupingDto} from '../../model/grouping.dto';

export interface OrderState {
    menuItems: ProductDto[];
    customerOrder: ProductDto[];
    orderItemQuantity: number;
    totalOrderCost: number;
    menuGroupItems: GroupingDto[];
}

export const initialOrderState: OrderState = {
    menuGroupItems: undefined,
    menuItems: undefined,
    customerOrder: undefined,
    orderItemQuantity: 0,
    totalOrderCost: 0
};
