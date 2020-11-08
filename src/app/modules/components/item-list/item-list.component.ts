import {ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FoodDetailComponent} from '../../food/food-detail/food-detail.component';
import {ModalController} from '@ionic/angular';
import {SwiperOptions} from 'swiper';
import {ProductDto} from '../../../model/product.dto';

@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
    @Input()
    menuItems;
    @Input()
    menuGroups;
    @Output()
    public getGroupId: EventEmitter<any> = new EventEmitter<any>();

    public config: SwiperOptions = {
        pagination: {el: '.swiper-pagination', clickable: true},
        spaceBetween: 5,
        slidesPerView: 2,
        loop: true
    };

    constructor(private modalController: ModalController, public cd: ChangeDetectorRef) {
    }

    ngOnInit() {
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
