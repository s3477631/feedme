import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import {AppState} from '../state/app.state';

import {orderReducer} from './order.reducer';
import {foodMenuReducer} from './food-menu.reducer';
import {drinkMenuReducer} from './drink-menu.reducer';
import {utilsReducer} from './util.reducer';

export const reducers: ActionReducerMap<AppState> = {
  orderState: orderReducer,
  foodMenuState: foodMenuReducer,
  drinkMenuState: drinkMenuReducer,
  utilState: utilsReducer
};


export const metaReducers: MetaReducer<AppState>[] =  [];
