import {GroupingDto} from './grouping.dto';

export interface ProductDto {
    id?: string;
    name?: string;
    price?: string;
    description?: string;
    quantity?: number;
    image?: any;
    groupId?: number;
    parent?: boolean;
    OrderQuantity?: number;
    OrderSize?: string;
}
