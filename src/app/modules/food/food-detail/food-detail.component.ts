import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ProductDto} from '../../../model/product.dto';
import {SwiperOptions} from 'swiper';
import {tap} from 'rxjs/operators';
import {OrderStateFacade} from '../../../facade/order-state.facade';
import {ModalController} from '@ionic/angular';
import {MenuServiceService} from '../../../services/menu-service.service';
import {FoodMenuStateFacade} from '../../../facade/food-menu-state.facade';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-food-detail',
    templateUrl: './food-detail.component.html',
    styleUrls: ['./food-detail.component.scss'],
})
export class FoodDetailComponent implements OnDestroy {
    menuItems: ProductDto[];
    orderItems = {OrderQuantity: 1, OrderSize: 'medium'};
    config: SwiperOptions = {
        pagination: {el: '.swiper-pagination', clickable: true},
        spaceBetween: 50,
        slidesPerView: 2,
    };
    private subscriptions: Subscription = new Subscription();

    constructor(
        public foodMenuStateFacade: FoodMenuStateFacade,
        private menuService: MenuServiceService,
        private modalController: ModalController) {
    }

    closeMenuItem() {
        this.modalController.dismiss();
    }

    addToOrders() {
        const selectedFood = this.foodMenuStateFacade.selectedFoodItem.subscribe(foodItem => {
            const foodSelected = Object.assign(this.orderItems, foodItem);
            this.menuService.submitOrder(foodSelected);
            this.modalController.dismiss();
        });

        this.subscriptions.add(selectedFood);
    }

    formItems($event: any) {
        this.orderItems = $event;
    }

    public ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
