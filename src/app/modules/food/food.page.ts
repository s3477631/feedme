import {Component, OnInit} from '@angular/core';
import {OrderStateFacade} from '../../facade/order-state.facade';
import {AlertController} from '@ionic/angular';
import {LocalStorage, LocalStorageService, SessionStorage} from 'ngx-webstorage';

@Component({
    selector: 'app-tab-food',
    templateUrl: 'food.page.html',
    styleUrls: ['food.scss']
})
export class FoodPage implements OnInit {
    public showBack: boolean;

    constructor(public orderStateFacade: OrderStateFacade,
                public alertController: AlertController,
                public localStorage: LocalStorageService
                ) {
    }

    public ngOnInit() {
        this.orderStateFacade.initializeListeners();
        this.orderStateFacade.loadMenuGroups();
        this.presentAlertConfirm();
        this.orderStateFacade.menuGroupItems.subscribe((items) => {
            console.log(items);
            //     if (items[0].parent) {
            //         this.showBack = true;
            //     } else {
            //         this.showBack = false;
            //     }
            // }
            // );
        });
    }
    async presentAlertConfirm() {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Confirm!',
            message: 'TEST DEMO',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('Confirm Cancel: blah');
                    }
                }, {
                    text: 'Demo',
                    handler: () => {
                        this.localStorage.store('tenant', 'show');
                    }
                }
            ]
        });

        await alert.present();
    }


    public goBack(): void {
        this.orderStateFacade.loadMenuGroups();
    }
}
