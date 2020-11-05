import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import {AppState} from '../state/app.state';

import {orderReducer} from './order.reducer';


export const reducers: ActionReducerMap<AppState> = {
  orderState: orderReducer
};


export const metaReducers: MetaReducer<AppState>[] =  [];
