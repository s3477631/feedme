import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {OrderState} from '../store/state/order.state';
import {FoodMenuState} from '../store/state/food-menu.state';

import {OrderDto} from '../model/order.dto';

import * as orderSelectors from '../store/selectors/order.selector';
import {Observable} from 'rxjs';
import {OrderActionsEnum} from '../store/enums/order.actions.enum';
import {ProductDto} from '../model/product.dto';
import {GroupingDto} from '../model/grouping.dto';
import * as FoodMenuActions from '../store/actions/food-menu.actions';
import * as foodMenuSelector from '../store/selectors/food-menu.selector';


@Injectable({
    providedIn: 'root'
})
export class FoodMenuStateFacade {
    public foodMenuItems: Observable<ProductDto[]>;
    public foodMenuGroupItems: Observable<GroupingDto[]>;
    public selectedFoodItem;

    constructor(private store: Store<FoodMenuState>) {
    }

    public initializeListeners(): void {
        this.foodMenuGroupItems = this.store.pipe(select(foodMenuSelector.foodMenuGroupSelector));
        this.foodMenuItems = this.store.pipe(select(foodMenuSelector.foodMenuItemSelector));
        this.selectedFoodItem = this.store.pipe(select(foodMenuSelector.selectedFoodMenuItemSelector))
    }
    public getFoodGroups(): void {
        this.store.dispatch(FoodMenuActions.loadFoodMenuGroups());
    }
    public getFoodMenuItems(foodMenuGroupId: number): void {
        this.store.dispatch(FoodMenuActions.loadFoodMenu({foodMenuID: foodMenuGroupId}));
    }
    public selectFoodItem(foodItem: number): void{
        this.store.dispatch(FoodMenuActions.selectedFoodItem({foodMenuItem: foodItem}));
    }
}
