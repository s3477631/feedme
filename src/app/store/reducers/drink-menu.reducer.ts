import {createReducer, on, Action} from '@ngrx/store';
import * as DrinkMenuActions from '../actions/drink-menu.actions';

import {DrinkMenuState, initialDrinkState} from '../state/drink-menu.state';
import * as FoodMenuActions from '../actions/food-menu.actions';
import {FoodMenuState} from '../state/food-menu.state';


const drinkMenuStateReducer = createReducer(initialDrinkState,
    on(DrinkMenuActions.loadDrinkMenuSuccess, (state: DrinkMenuState, action) => {
        return {
            ...state,
            drinkMenuGroups: action.drinkMenu
        };
    }),
    on(DrinkMenuActions.loadDrinkItemsSuccess, (state: DrinkMenuState, action) => {
        return {
            ...state,
            drinkMenuItems: action.drinkMenuItem
        };
    }),
    on(DrinkMenuActions.selectedDrinkItemSuccess, (state: DrinkMenuState, action) => {
        return {
            ...state,
            selectedItem: action.drinkMenuItem
        };
    })
);


export function drinkMenuReducer(state: DrinkMenuState, action: Action) {
    return drinkMenuStateReducer(state, action);
}
