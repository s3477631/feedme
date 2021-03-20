import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MenuExplorerService} from '../../../services/menu-explorer.service';
import {SwiperOptions} from 'swiper';
import {FoodDetailComponent} from '../../food/food-detail/food-detail.component';
import {ModalController} from '@ionic/angular';
import {tap} from 'rxjs/operators';
import {OrderStateFacade} from '../../../facade/order-state.facade';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss'],
})

export class DrinkListComponent implements OnInit {
  @Input()
  menuItems;
  @Input()
  groupTitle: string;
  @Input()
  menuGroups;
  @Output()
  public getGroupId: EventEmitter<any> = new EventEmitter<any>();
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    spaceBetween: 5,
    slidesPerView: 2,
    loop: true
  };
  constructor(

      private modalController: ModalController) { }

  ngOnInit() {
    // this.orderStateFacade.initializeListeners();
    // this.orderStateFacade.menuGroupItems.pipe(tap(menuGroups => {
    //   console.log(this.menuGroups);
    //   this.menuGroups = menuGroups;
    //   this.cd.detectChanges();
    // })).subscribe();
    // this.orderStateFacade.menuItems.pipe(tap(menuItems =>{
    //   this.menuItems = menuItems;
    //   this.cd.detectChanges();
    // })).subscribe();
    // this.orderStateFacade.groupTitle.pipe(tap(groupTitle => {
    //   this.groupTitle = groupTitle;
    // })).subscribe();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: FoodDetailComponent,
      cssClass: 'food-detail-style'
    });
    return await modal.present();
  }

  selectMenuGroup(groupId) {
    this.getGroupId.emit(groupId);
  }
}
