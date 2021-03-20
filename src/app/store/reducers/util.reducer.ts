import {createReducer, on, Action} from '@ngrx/store';
import * as UtilsActions from '../actions/utils.actions';

import {UtilsState, initialUtilState} from '../state/utils.state';


const utilsStateReducer = createReducer(initialUtilState,
    on(UtilsActions.showBackMenuSuccess, (state: UtilsState, action) => {
        return {
            ...state,
            showBackButton: action.showBackMenu !== undefined ? action.showBackMenu : !state.showBackButton
        };
    }),
);


export function utilsReducer(state: UtilsState, action: Action) {
    return utilsStateReducer(state, action);
}
