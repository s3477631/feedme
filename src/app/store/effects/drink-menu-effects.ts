import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import * as DrinkMenuActions from '../actions/drink-menu.actions';
import {catchError, map, switchMap} from 'rxjs/operators';

import {EMPTY, Observable} from 'rxjs';
import {ProductDto} from '../../model/product.dto';
import {MenuServiceService} from '../../services/menu-service.service';
import {GroupingDto} from '../../model/grouping.dto';


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
    private loadDrinkMenuGroup(groupName: string): Observable<GroupingDto[]> {
        const s = this.menuService.getMenuGroups(groupName);
        console.log(s)
        s.subscribe(v => console.log(v));
        return s
    }
    constructor(private menuService: MenuServiceService, private actions: Actions) {
    }

}
