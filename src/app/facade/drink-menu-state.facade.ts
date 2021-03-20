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


@Injectable({
    providedIn: 'root'
})
export class DrinkMenuStateFacade {
    public drinkMenuItems: Observable<ProductDto[]>;
    public drinkMenuGroupItems: Observable<GroupingDto[]>;


    constructor(private store: Store<DrinkMenuState>) {
    }

    public initializeListeners(): void {
        this.drinkMenuGroupItems = this.store.pipe(select(drinkMenuSelector.drinkMenuSelector));
    }
    public getDrinkGroups(){
        this.store.dispatch(DrinkMenuActions.loadDrinkMenu());
    }
}
