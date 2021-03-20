import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {SwiperOptions} from 'swiper';
import {FoodDetailComponent} from '../../food/food-detail/food-detail.component';
import {ModalController} from '@ionic/angular';

import {DrinkMenuStateFacade} from '../../../facade/drink-menu-state.facade';
import {Subscription} from 'rxjs';
import {SwiperComponent} from 'ngx-useful-swiper';
import {DrinkDetailComponent} from '../drink-detail/drink-detail.component';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss'],
})

export class DrinkListComponent implements OnInit {
  @ViewChild('usefulSwiper') usefulSwiper: SwiperComponent;
  @Input()
  menuItems;
  @Input()
  groupTitle: string;
  @Input()
  menuGroups;
  private subscriptions: Subscription = new Subscription();
  @Output()
  public getGroupId: EventEmitter<any> = new EventEmitter<any>();
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    spaceBetween: 5,
    slidesPerView: 2,
    loop: true
  };
  constructor(
      private drinkMenuStateFacade: DrinkMenuStateFacade,
      private modalController: ModalController) { }

  ngOnInit() {
    const drinkItems = this.drinkMenuStateFacade.drinkMenuItems.subscribe((menuItems) => {
      this.menuItems = menuItems;
    });
    this.subscriptions.add(drinkItems);
    this.selectItem(1004);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: DrinkDetailComponent,
      cssClass: 'food-detail-style'
    });
    return await modal.present();
  }
  public selectItem(initialItem?: number): void {
    if (initialItem) {
      this.drinkMenuStateFacade.selectDrinkItem(initialItem);
    } else {
      const selectedItemId = parseInt(this.usefulSwiper.swiper.clickedSlide.id, 0);
      this.drinkMenuStateFacade.selectDrinkItem(selectedItemId);
    }
  }

}
