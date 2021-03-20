import {ProductDto} from '../../model/product.dto';
import {GroupingDto} from '../../model/grouping.dto';

export interface DrinkMenuState {
    drinkMenuItems: ProductDto[];
    drinkMenuGroups: GroupingDto[];
}

export const initialDrinkState: DrinkMenuState = {
    drinkMenuItems: undefined,
    drinkMenuGroups: undefined,
};
