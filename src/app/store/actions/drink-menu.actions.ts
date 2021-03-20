import {createAction, props} from '@ngrx/store';
import {GroupingDto} from '../../model/grouping.dto';
import {DrinkActionsEnum} from '../enums/drink.actions.enum';
import {ProductDto} from '../../model/product.dto';
import {FoodActionsEnum} from '../enums/food.actions.enum';

export const loadDrinkMenu = createAction(DrinkActionsEnum.LOAD_DRINK_GROUP_MENU);

export const loadDrinkMenuSuccess = createAction(DrinkActionsEnum.LOAD_DRINK_GROUP_MENU_SUCCESS,
    props<{ drinkMenu: GroupingDto[] }>()
);
export const loadDrinkItems = createAction(DrinkActionsEnum.LOAD_DRINK_MENU,
    props<{ drinkMenuID: number }>()
);

export const loadDrinkItemsSuccess = createAction(DrinkActionsEnum.LOAD_DRINK_MENU_SUCCESS,
    props<{ drinkMenuItem: ProductDto[] }>()
);
export const selectedDrinkItem = createAction(DrinkActionsEnum.SELECTED_DRINK_MENU_ITEM,
    props<{ drinkMenuItem: number }>()
);

export const selectedDrinkItemSuccess = createAction(DrinkActionsEnum.SELECTED_DRINK_MENU_ITEM_SUCCESS,
    props<{ drinkMenuItem: ProductDto}>()
);
