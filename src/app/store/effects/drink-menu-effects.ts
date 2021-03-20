import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import * as DrinkMenuActions from '../actions/drink-menu.actions';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';

import {EMPTY, Observable} from 'rxjs';
import {MenuServiceService} from '../../services/menu-service.service';
import {GroupingDto} from '../../model/grouping.dto';
import * as FoodMenuActions from '../actions/food-menu.actions';
import {ProductDto} from '../../model/product.dto';


@Injectable()
export class DrinkMenuEffects {
    public loadDrinkMenuGroupList$ = createEffect(() => this.actions.pipe(
        ofType(DrinkMenuActions.loadDrinkMenu),
        switchMap((action) => this.loadDrinkMenuGroup('drink').pipe(
            map((drinkMenuGroup) => DrinkMenuActions.loadDrinkMenuSuccess({drinkMenu: drinkMenuGroup})),
            catchError((errorParam) => {
                return EMPTY;
            })
        ))
    ));

    public loadDrinkMenuItems$ = createEffect(() => this.actions.pipe(
        ofType(DrinkMenuActions.loadDrinkItems),
        mergeMap((action) => this.loadDrinkMenuItems(action.drinkMenuID).pipe(
            map((drinkMenu) => DrinkMenuActions.loadDrinkItemsSuccess({drinkMenuItem: drinkMenu}))
        ))
    ));

    public setSelectedItem$ = createEffect(() => this.actions.pipe(
        ofType(DrinkMenuActions.selectedDrinkItem),
        mergeMap((action) => this.loadChildItems(action.drinkMenuItem).pipe(
            map((selectedDrinkItem) => DrinkMenuActions.selectedDrinkItemSuccess({drinkMenuItem: selectedDrinkItem}))
        ))
    ));
    private loadChildItems(drinkItemId: number): Observable<ProductDto> {
        console.log(drinkItemId)
        return this.menuService.getChildItems(drinkItemId);
    }

    private loadDrinkMenuItems(drinkMenuId: number): Observable<ProductDto[]> {
        return this.menuService.getMenuItems(drinkMenuId);
    }
    private loadDrinkMenuGroup(groupName: string): Observable<GroupingDto[]> {
        const s = this.menuService.getMenuGroups(groupName);
        console.log(s)
        s.subscribe(v => console.log(v));
        return s
    }
    constructor(private menuService: MenuServiceService, private actions: Actions) {
    }

}
