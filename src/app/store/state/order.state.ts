import {ProductDto} from '../../model/product.dto';
import {GroupingDto} from '../../model/grouping.dto';

export interface OrderState {
    customerOrder: ProductDto[];
    orderItemQuantity: number;
    totalOrderCost: number;
    order: ProductDto[];
}

export const initialOrderState: OrderState = {
    order: undefined,
    customerOrder: undefined,
    orderItemQuantity: 0,
    totalOrderCost: 0
};
