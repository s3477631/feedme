import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';

import {DrinkMenuState} from '../store/state/drink-menu.state';

import {OrderDto} from '../model/order.dto';

import * as orderSelectors from '../store/selectors/order.selector';
import {Observable} from 'rxjs';
import {OrderActionsEnum} from '../store/enums/order.actions.enum';
import {ProductDto} from '../model/product.dto';
import {GroupingDto} from '../model/grouping.dto';
import * as DrinkMenuActions from '../store/actions/drink-menu.actions';
import * as drinkMenuSelector from '../store/selectors/drink-menu.selector';
import * as FoodMenuActions from '../store/actions/food-menu.actions';


@Injectable({
    providedIn: 'root'
})
export class DrinkMenuStateFacade {
    public drinkMenuItems: Observable<ProductDto[]>;
    public drinkMenuGroupItems: Observable<GroupingDto[]>;
    public selectedDrinkItem: Observable<ProductDto>;

    constructor(private store: Store<DrinkMenuState>) {
    }

    public initializeListeners(): void {
        this.drinkMenuGroupItems = this.store.pipe(select(drinkMenuSelector.drinkMenuSelector));
        this.drinkMenuItems = this.store.pipe(select(drinkMenuSelector.drinkMenuItemSelector));
        this.selectedDrinkItem = this.store.pipe(select(drinkMenuSelector.selectedDrinkMenuItemSelector));
    }
    public getDrinkGroups(){
        this.store.dispatch(DrinkMenuActions.loadDrinkMenu());
    }
    public getDrinkMenuItems(drinkMenuGroupId: number): void {
        this.store.dispatch(DrinkMenuActions.loadDrinkItems({drinkMenuID: drinkMenuGroupId}));
    }
    public selectDrinkItem(drinkItem: number): void{
        this.store.dispatch(DrinkMenuActions.selectedDrinkItem({drinkMenuItem: drinkItem}));
    }
}
