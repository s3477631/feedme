import {createFeatureSelector, createSelector} from '@ngrx/store';
import {DrinkMenuState} from '../state/drink-menu.state';
import {FoodMenuState} from '../state/food-menu.state';
import {selectFoodMenuState} from './food-menu.selector';

export const selectDrinkMenuState = createFeatureSelector<DrinkMenuState>('drinkMenuState');

// export const menuListSelector = createSelector(selectOrderState,
//     (orderState: OrderState) => orderState.menuItems
// );
export const drinkMenuSelector = createSelector(selectDrinkMenuState,
    (drinkMenuState: DrinkMenuState) => drinkMenuState.drinkMenuGroups
);
export const drinkMenuItemSelector = createSelector(selectDrinkMenuState,
    (drinkMenuState: DrinkMenuState) => drinkMenuState.drinkMenuItems
);
export const selectedDrinkMenuItemSelector = createSelector(selectDrinkMenuState,
    (drinkMenuState: DrinkMenuState) => drinkMenuState.selectedItem
);
