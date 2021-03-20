import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {OrderStateFacade} from '../../facade/order-state.facade';
import {AlertController} from '@ionic/angular';
import {LocalStorage, LocalStorageService, SessionStorage} from 'ngx-webstorage';
import {tap} from 'rxjs/operators';
import {FoodMenuStateFacade} from '../../facade/food-menu-state.facade';
import {DrinkMenuState} from '../../store/state/drink-menu.state';
import {DrinkMenuStateFacade} from '../../facade/drink-menu-state.facade';
import {MenuServiceService} from '../../services/menu-service.service';
import {Router} from '@angular/router';
import {UtilStateFacade} from '../../facade/util-state.facade';

@Component({
    selector: 'app-tab-food',
    templateUrl: 'food.page.html',
    styleUrls: ['food.scss']
})
export class FoodPage implements OnInit {
    public showBack: boolean;
    public menuItems;
    public menuGroups;
    public groupTitle: string;
    public first: string;
    public last: string;

    constructor(public orderStateFacade: OrderStateFacade,
                public foodMenuStateFacade: FoodMenuStateFacade,
                public alertController: AlertController,
                public utilStateFacade: UtilStateFacade,
                private route: Router,
                public menuService: MenuServiceService) {}

    public ngOnInit(): void {
        // this.orderStateFacade.initializeListeners();
        this.foodMenuStateFacade.initializeListeners();
        // this.drinkMenuStateFacade.getFoodGroups()
        // this.foodMenuStateFacade.getFoodMenuItems(1);
        this.foodMenuStateFacade.getFoodGroups();
        // this.orderStateFacade.loadMenuGroups('groups-food');
        // this.orderStateFacade.menuGroupItems.pipe(tap(menuGroups => {
        //     this.menuGroups = menuGroups;
        //     this.cd.detectChanges();
        // })).subscribe();
        // this.orderStateFacade.menuItems.pipe(tap(menuItems => {
        //     this.menuItems = menuItems;
        //     this.cd.detectChanges();
        // })).subscribe();
        // this.orderStateFacade.groupTitle.pipe(tap(groupTitle => {
        //     this.groupTitle = groupTitle;
        // })).subscribe();

    }


    // async presentAlertConfirm() {
    //     const alert = await this.alertController.create({
    //         cssClass: 'my-custom-class',
    //         header: 'Confirm!',
    //         message: 'TEST DEMO',
    //         buttons: [
    //             {
    //                 text: 'Cancel',
    //                 role: 'cancel',
    //                 cssClass: 'secondary',
    //                 handler: (blah) => {
    //                     console.log('Confirm Cancel: blah');
    //                 }
    //             }, {
    //                 text: 'Demo',
    //                 handler: () => {
    //                     this.localStorage.store('tenant', 'show');
    //                 }
    //             }
    //         ]
    //     });
    //
    //     await alert.present();
    // }

    submit() {
        const payload = {
            first: this.first,
            last: this.last
        };
        this.menuService.submitOrder(payload);
    }

    public getMenu($event): void {
        console.log($event);
        this.foodMenuStateFacade.getFoodMenuItems($event);
    }

    test() {
        // this.foodMenuStateFacade.getFoodMenuItems(1);
    }

    public routeBack(): void {
        this.route.navigate(['tabs', 'food']);
        this.utilStateFacade.backButton(false);
    }
}
