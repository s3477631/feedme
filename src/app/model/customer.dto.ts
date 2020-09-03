import {OrderDto} from './order.dto';

export interface CustomerDto{
 name: string;
 phoneNumber: string;
 location: string;
 order: OrderDto[];
}
