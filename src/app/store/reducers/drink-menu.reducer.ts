import {createReducer, on, Action} from '@ngrx/store';
import * as DrinkMenuActions from '../actions/drink-menu.actions';

import {DrinkMenuState, initialDrinkState} from '../state/drink-menu.state';


const drinkMenuStateReducer = createReducer(initialDrinkState,
    on(DrinkMenuActions.loadDrinkMenuSuccess, (state: DrinkMenuState, action) => {
        return {
            ...state,
            drinkMenuGroups: action.drinkMenu
        };
    }),
);


export function drinkMenuReducer(state: DrinkMenuState, action: Action) {
    return drinkMenuStateReducer(state, action);
}
