import {createAction, props} from '@ngrx/store';
import {FoodActionsEnum} from '../enums/food.actions.enum';
import {ProductDto} from '../../model/product.dto';
import {GroupingDto} from '../../model/grouping.dto';

export const loadFoodMenuGroups = createAction(FoodActionsEnum.LOAD_FOOD_MENU_GROUP);

export const loadFoodMenuGroupsSuccess = createAction(FoodActionsEnum.LOAD_FOOD_MENU_GROUP_SUCCESS,
    props<{ foodMenuGroups: GroupingDto[] }>()
);

export const loadFoodMenu = createAction(FoodActionsEnum.LOAD_MENU_FOOD,
    props<{ foodMenuID: number }>()
);

export const loadFoodMenuSuccess = createAction(FoodActionsEnum.LOAD_MENU_FOOD_SUCCESS,
    props<{ foodMenuItem: ProductDto[] }>()
);

export const selectedFoodItem = createAction(FoodActionsEnum.SELECTED_FOOD_MENU_ITEM,
    props<{ foodMenuItem: number }>()
);

export const selectedFoodItemSuccess = createAction(FoodActionsEnum.SELECTED_FOOD_MENU_ITEM_SUCCESS,
    props<{ foodMenuItem: ProductDto}>()
);
