import {Component, OnInit} from '@angular/core';
import {MenuExplorerService} from '../../../services/menu-explorer.service';
import {OrderStateFacade} from '../../../facade/order-state.facade';
import {ProductDto} from '../../../model/product.dto';
import {LocalStorageService} from 'ngx-webstorage';
import {ModalController, ToastController} from '@ionic/angular';
import {tap} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupingDto} from '../../../model/grouping.dto';
import {SwiperOptions} from 'swiper';
import {FoodDetailComponent} from '../food-detail/food-detail.component';


@Component({
    selector: 'app-food-list',
    templateUrl: './food-list.component.html',
    styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {

    public selectedItem: string;
    public orderTotal: number;
    public menuItems: ProductDto[];
    public menuGroups: GroupingDto[];
    config: SwiperOptions = {
        pagination: { el: '.swiper-pagination', clickable: true },
        spaceBetween: 5,
        slidesPerView: 2,
        loop: true
    };

    constructor(private menuExplorerService: MenuExplorerService,
                private localStorage: LocalStorageService,
                private toastController: ToastController,
                public route: ActivatedRoute,
                public router: Router,
                public modalController: ModalController,
                private orderStateFacade: OrderStateFacade) {
    }

    public ngOnInit() {
        this.orderStateFacade.menuGroupItems.pipe(tap(menuGroups => {
            this.menuGroups = menuGroups;
        })).subscribe();
        this.orderStateFacade.menuItems.pipe(tap(menuItems =>
            this.menuItems = menuItems
        )).subscribe();
        this.orderStateFacade.totalOrder.pipe(tap(total => {
            this.orderTotal = total;
        })).subscribe();
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: FoodDetailComponent,
            cssClass: 'food-detail-style'
        });
        return await modal.present();
    }

    public addItem(order: ProductDto): void {
        const existingOrder = this.localStorage.retrieve('order');
        if (existingOrder !== null) {
            const orderItems = JSON.parse(existingOrder);
            const newOrder = {
                id: order.id,
                quantity: order.quantity,
                name: order.name,
                description: order.description,
                image: order.image,
                price: order.price
            };
            const orderItem = [...orderItems, newOrder];
            const finalizeOrder = JSON.stringify(orderItem);
            this.localStorage.store('order', finalizeOrder);
        } else {
            const newOrder = [{
                id: order.id,
                quantity: order.quantity,
                name: order.name,
                description: order.description,
                image: order.image,
                price: order.price
            }];
            this.localStorage.store('order', JSON.stringify(newOrder));
        }
        this.orderStateFacade.addOrder(order);
        this.newOrderToast(order);
        this.runningTotalToast();
    }

    public subtractOrderItem(order: ProductDto): void {
        this.orderStateFacade.removeOrderItem(order);
    }

    async newOrderToast(order: ProductDto) {
        const toast = await this.toastController.create({
            header: 'Menu item added to order',
            message: `${order.quantity} x ${order.name} @ ${order.price}`,
            position: 'top',
            duration: 3500,
            buttons: [
                {
                    text: 'Okay',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        await toast.present();
    }

    async runningTotalToast() {
        const toast = await this.toastController.create({
            header: 'Current Menu:',
            message: `current order total: $ ${this.orderTotal.toFixed(2)}`,
            position: 'bottom',
            cssClass: 'runningTotal',
            buttons: [
                {
                    text: 'Check Out',
                    role: 'cancel',
                    handler: () => {
                        toast.dismiss().then(() => {
                            this.router.navigate(['../../order'], {relativeTo: this.route});
                        });
                    }
                }
            ]
        });
        console.log(toast);
        await toast.present();
    }


    public selectItem(selectedOrder: ProductDto) {
        this.selectedItem = selectedOrder.id;
    }

    showChildren($event: ProductDto[]): void {
        this.menuItems = $event;
    }

    public selectMenuGroup(menuGroup: number): void {
        this.orderStateFacade.loadMenuItems(menuGroup);
    }

}
