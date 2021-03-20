import {createAction, props} from '@ngrx/store';
import {GroupingDto} from '../../model/grouping.dto';
import {DrinkActionsEnum} from '../enums/drink.actions.enum';

export const loadDrinkMenu = createAction(DrinkActionsEnum.LOAD_DRINK_GROUP_MENU);

export const loadDrinkMenuSuccess = createAction(DrinkActionsEnum.LOAD_DRINK_GROUP_MENU_SUCCESS,
    props<{ drinkMenu: GroupingDto[] }>()
);
