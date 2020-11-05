import {Component, Input, OnInit} from '@angular/core';
import {ProductDto} from '../../../model/product.dto';
import {SwiperOptions} from 'swiper';
import {tap} from 'rxjs/operators';
import {OrderStateFacade} from '../../../facade/order-state.facade';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss'],
})
export class FoodDetailComponent implements OnInit {
  menuItems: ProductDto[];

  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    spaceBetween: 50,
    slidesPerView: 2,
  };
  constructor(public orderStateFacade: OrderStateFacade, private modalController: ModalController) { }

  ngOnInit() {
    this.orderStateFacade.menuItems.pipe(tap(menuItems =>
        this.menuItems = menuItems
    )).subscribe();
  }

  closeMenuItem() {
    this.modalController.dismiss();
  }
}
