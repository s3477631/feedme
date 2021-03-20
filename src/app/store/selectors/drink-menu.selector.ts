import {createFeatureSelector, createSelector} from '@ngrx/store';
import {DrinkMenuState} from '../state/drink-menu.state';

export const selectDrinkMenuState = createFeatureSelector<DrinkMenuState>('drinkMenuState');

// export const menuListSelector = createSelector(selectOrderState,
//     (orderState: OrderState) => orderState.menuItems
// );
export const drinkMenuSelector = createSelector(selectDrinkMenuState,
    (drinkMenuState: DrinkMenuState) => drinkMenuState.drinkMenuGroups
);
