import {ProductDto} from '../../model/product.dto';
import {GroupingDto} from '../../model/grouping.dto';

export interface DrinkMenuState {
    selectedItem: ProductDto;
    drinkMenuItems: ProductDto[];
    drinkMenuGroups: GroupingDto[];
}

export const initialDrinkState: DrinkMenuState = {
    selectedItem: undefined,
    drinkMenuItems: undefined,
    drinkMenuGroups: undefined,
};
