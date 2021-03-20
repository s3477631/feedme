import {ProductDto} from '../../model/product.dto';
import {GroupingDto} from '../../model/grouping.dto';

export interface FoodMenuState {
    selectedItem: ProductDto;
    foodMenuItems: ProductDto[];
    foodMenuGroups: GroupingDto[];
}

export const initialFoodState: FoodMenuState = {
    selectedItem: undefined,
    foodMenuGroups: undefined,
    foodMenuItems: undefined,
};
