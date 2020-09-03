import {ProductDto} from './product.dto';

// update time to moment (as soon as I install it)
export interface OrderDto {
    orderItems: ProductDto[];
    price: number;
    time: number;
}

