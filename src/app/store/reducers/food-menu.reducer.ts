import {createReducer, on, Action} from '@ngrx/store';

import * as FoodMenuActions from '../actions/food-menu.actions';
import {FoodMenuState, initialFoodState} from '../state/food-menu.state';


const foodMenuStateReducer = createReducer(initialFoodState,
    on(FoodMenuActions.loadFoodMenuGroupsSuccess, (state: FoodMenuState, action) => {
        return {
            ...state,
            foodMenuGroups: action.foodMenuGroups
        };
    }),
    on(FoodMenuActions.loadFoodMenuSuccess, (state: FoodMenuState, action) => {
        return {
            ...state,
            foodMenuItems: action.foodMenuItem
        };
    }),
    on(FoodMenuActions.selectedFoodItemSuccess, (state: FoodMenuState, action) => {
        return {
            ...state,
            selectedItem: action.foodMenuItem
        };
    })
);
export function foodMenuReducer(state: FoodMenuState | undefined, action: Action) {
    return foodMenuStateReducer(state, action);
}
