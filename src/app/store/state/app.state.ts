import {OrderState} from './order.state';
import {FoodMenuState} from './food-menu.state';
import {DrinkMenuState} from './drink-menu.state';
import {UtilsState} from './utils.state';

export interface AppState {
    orderState: OrderState;
    foodMenuState: FoodMenuState;
    drinkMenuState: DrinkMenuState;
    utilState: UtilsState;
}
