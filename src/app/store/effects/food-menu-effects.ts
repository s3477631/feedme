import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import * as FoodMenuActions from '../actions/food-menu.actions';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {OrderActionsEnum} from '../enums/order.actions.enum';
import {EMPTY, Observable, of} from 'rxjs';
import {ProductDto} from '../../model/product.dto';
import {MenuServiceService} from '../../services/menu-service.service';
import {GroupingDto} from '../../model/grouping.dto';
import * as DrinkMenuActions from '../actions/drink-menu.actions';


@Injectable()
export class FoodMenuEffects {
    public loadFoodMenuGroupList$ = createEffect(() => this.actions.pipe(
        ofType(FoodMenuActions.loadFoodMenuGroups),
        switchMap((action) => this.loadFoodMenuGroup('food').pipe(
            map((foodMenuGroup) => FoodMenuActions.loadFoodMenuGroupsSuccess({foodMenuGroups: foodMenuGroup})),
            catchError((errorParam) => {
                return EMPTY;
            })
        ))
    ));
    public loadFoodMenuItems$ = createEffect(() => this.actions.pipe(
        ofType(FoodMenuActions.loadFoodMenu),
        mergeMap((action) => this.loadFoodMenuItems(action.foodMenuID).pipe(
            map((foodMenu) => FoodMenuActions.loadFoodMenuSuccess({foodMenuItem: foodMenu})),
            catchError((errorParam) => {
                return EMPTY;
            })
        ))
    ));

    public setSelectedItem$ = createEffect(() => this.actions.pipe(
        ofType(FoodMenuActions.selectedFoodItem),
        mergeMap((action) => this.loadChildItems(action.foodMenuItem).pipe(
            map((selectedFoodItem) => FoodMenuActions.selectedFoodItemSuccess({foodMenuItem: selectedFoodItem}))
        ))
    ));

    private loadChildItems(foodItemId: number): Observable<ProductDto> {
        return this.menuService.getChildItems(foodItemId);
    }

    private loadFoodMenuItems(foodMenuId: number): Observable<ProductDto[]> {
        return this.menuService.getMenuItems(foodMenuId);
    }

    private loadFoodMenuGroup(groupName: string): Observable<GroupingDto[]> {
        return this.menuService.getMenuGroups(groupName);
    }

    constructor(private menuService: MenuServiceService, private actions: Actions) {
    }

}
