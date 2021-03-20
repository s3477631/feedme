import {createFeatureSelector, createSelector} from '@ngrx/store';
import {FoodMenuState} from '../state/food-menu.state';

export const selectFoodMenuState = createFeatureSelector<FoodMenuState>('foodMenuState');

// export const menuListSelector = createSelector(selectOrderState,
//     (orderState: OrderState) => orderState.menuItems
// );
export const foodMenuGroupSelector = createSelector(selectFoodMenuState,
    (foodMenuState: FoodMenuState) => foodMenuState.foodMenuGroups
);
export const foodMenuItemSelector = createSelector(selectFoodMenuState,
    (foodMenuState: FoodMenuState) => foodMenuState.foodMenuItems
);
export const selectedFoodMenuItemSelector = createSelector(selectFoodMenuState,
    (foodMenuState: FoodMenuState) => foodMenuState.selectedItem
);
