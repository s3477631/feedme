import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductDto} from '../../../model/product.dto';
import {SwiperOptions} from 'swiper';
import {ModalController} from '@ionic/angular';
import {MenuServiceService} from '../../../services/menu-service.service';
import {FoodMenuStateFacade} from '../../../facade/food-menu-state.facade';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-food-detail',
    templateUrl: './food-detail.component.html',
    styleUrls: ['./food-detail.component.scss'],
})
export class FoodDetailComponent implements OnInit, OnDestroy {
    menuItems: ProductDto[];
    public orderItems;
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
    public ngOnInit(): void {
      const selectedFood =  this.foodMenuStateFacade.selectedFoodItem.subscribe(selectedFoodItem => {
        const formFields =  this.menuService.getFormFields(selectedFoodItem.id).subscribe(fields => {
              this.orderItems = fields;
          });
        this.subscriptions.add(formFields);
        });

      this.subscriptions.add(selectedFood);
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
