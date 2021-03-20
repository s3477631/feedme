import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UtilsState} from '../state/utils.state';

export const selectUtilsState = createFeatureSelector<UtilsState>('utilState');

export const utilSelector = createSelector(selectUtilsState,
    (utilState: UtilsState) => utilState.showBackButton
);
