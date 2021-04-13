import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductDto} from '../../../model/product.dto';
import {SwiperOptions} from 'swiper';
import {ModalController} from '@ionic/angular';
import {MenuServiceService} from '../../../services/menu-service.service';
import {FoodMenuStateFacade} from '../../../facade/food-menu-state.facade';
import {Subscription} from 'rxjs';
import {DrinkMenuStateFacade} from '../../../facade/drink-menu-state.facade';

@Component({
    selector: 'app-food-detail',
    templateUrl: './drink-detail.component.html',
    styleUrls: ['./drink-detail.component.scss'],
})
export class DrinkDetailComponent implements OnInit, OnDestroy {
    menuItems: ProductDto[];
    orderItems = {OrderQuantity: 1, OrderSize: 'medium'};
    config: SwiperOptions = {
        pagination: {el: '.swiper-pagination', clickable: true},
        spaceBetween: 50,
        slidesPerView: 2,
    };
    private subscriptions: Subscription = new Subscription();

    constructor(
        public drinkMenuStateFacade: DrinkMenuStateFacade,
        private menuService: MenuServiceService,
        private modalController: ModalController) {
    }
    public ngOnInit() {

    }

    closeMenuItem() {
        this.modalController.dismiss();
    }

    addToOrders() {
        const selectedDrink = this.drinkMenuStateFacade.selectedDrinkItem.subscribe(drinkItem => {
            const drinkSelected = Object.assign(this.orderItems, drinkItem);
            this.menuService.submitOrder(drinkSelected);
            this.modalController.dismiss();
        });

        this.subscriptions.add(selectedDrink);
    }

    formItems($event: any) {
        this.orderItems = $event;
    }

    public ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
