import {ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {FoodDetailComponent} from '../../food/food-detail/food-detail.component';
import {ModalController} from '@ionic/angular';
import {SwiperOptions} from 'swiper';
import {ActivatedRoute, Router} from '@angular/router';
import {FoodMenuStateFacade} from '../../../facade/food-menu-state.facade';
import {DrinkMenuStateFacade} from '../../../facade/drink-menu-state.facade';
import {Subscription} from 'rxjs';
import {UtilStateFacade} from '../../../facade/util-state.facade';

@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit, OnDestroy {
    groupTitle: string;
    menuItems = true;
    menuGroups;
    showWrapper: boolean;
    @Output()
    public getGroupId: EventEmitter<any> = new EventEmitter<any>();

    private subscriptions: Subscription = new Subscription();

    public config: SwiperOptions = {
        pagination: {el: '.swiper-pagination', clickable: true},
        spaceBetween: 5,
        slidesPerView: 2,
        loop: true
    };
    public isLoading = true;
    constructor(private modalController: ModalController,
                private activateRoute: ActivatedRoute,
                private foodMenuStateFacade: FoodMenuStateFacade,
                private drinkMenuStateFacade: DrinkMenuStateFacade,
                private utilStateFacade: UtilStateFacade,
                private cd: ChangeDetectorRef,
                private route: ActivatedRoute,
                private router: Router) {
    }

    public ngOnInit() {
            if (this.activateRoute.parent.snapshot.url[0]['path'] === 'food') {
                const foodGroups = this.foodMenuStateFacade.foodMenuGroupItems.subscribe((menuGroups) => {
                    this.menuGroups = menuGroups;
                    this.isLoading = false;
                });
                this.groupTitle = 'food';
                this.subscriptions.add(foodGroups);
            } else {
                const drinkGroups = this.drinkMenuStateFacade.drinkMenuGroupItems.subscribe((menuGroups) => {
                    this.menuGroups = menuGroups;
                });
                this.groupTitle = 'drink';
                this.subscriptions.add(drinkGroups);
            }
            setTimeout(() => {
                this.showWrapper = true;
                this.cd.detectChanges();
            }, 1000);
    }

    public ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: FoodDetailComponent,
            cssClass: 'food-detail-style'
        });
        return await modal.present();
    }

    selectMenuGroup(groupId) {
        this.utilStateFacade.backButton(true);
        this.router.navigate(['tabs', this.groupTitle, 'menu', groupId]);
        if (this.groupTitle === 'food'){
           this.foodMenuStateFacade.getFoodMenuItems(groupId);
        } else {
        }
    }
}
