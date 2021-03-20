import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ProductDto} from '../../../model/product.dto';
import {ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {SwiperOptions} from 'swiper';
import {FoodDetailComponent} from '../food-detail/food-detail.component';
import {FoodMenuStateFacade} from '../../../facade/food-menu-state.facade';
import {Subscription} from 'rxjs';
import {SwiperComponent} from 'ngx-useful-swiper';


@Component({
    selector: 'app-food-list',
    templateUrl: './food-list.component.html',
    styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit, OnDestroy {
    public menuItems: ProductDto[];
    public subscriptions: Subscription = new Subscription();
    config: SwiperOptions = {
        pagination: {el: '.swiper-pagination', clickable: true},
        spaceBetween: 5,
        slidesPerView: 2,
        loop: true
    };
    @ViewChild('usefulSwiper') usefulSwiper: SwiperComponent;

    constructor(public router: Router,
                public modalController: ModalController,
                public foodMenuStateFacade: FoodMenuStateFacade) {
    }

    public ngOnInit() {
        const foodItems = this.foodMenuStateFacade.foodMenuItems.subscribe((menuItems) => {
            this.menuItems = menuItems;
        });
        this.subscriptions.add(foodItems);
        this.selectItem(1);
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: FoodDetailComponent,
            cssClass: 'food-detail-style'
        });
        return await modal.present();
    }


    public ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }

    public selectItem(initialItem?: number): void {
        if (initialItem) {
            this.foodMenuStateFacade.selectFoodItem(initialItem);
        } else {
            const selectedItemId = parseInt(this.usefulSwiper.swiper.clickedSlide.id, 0);
            this.foodMenuStateFacade.selectFoodItem(selectedItemId);
        }
    }
}
