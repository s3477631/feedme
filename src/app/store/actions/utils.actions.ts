import {createAction, props} from '@ngrx/store';
import {UtilsActionsEnum} from '../enums/utils.actions.enum';

export const showBackMenu = createAction(UtilsActionsEnum.SHOW_BACK_BUTTON,
    props<{showBack: boolean}>()
);

export const showBackMenuSuccess = createAction(UtilsActionsEnum.SHOW_BACK_BUTTON_SUCCESS,
    props<{ showBackMenu: boolean }>()
);
