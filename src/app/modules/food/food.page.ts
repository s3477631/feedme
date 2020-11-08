import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {OrderStateFacade} from '../../facade/order-state.facade';
import {AlertController} from '@ionic/angular';
import {LocalStorage, LocalStorageService, SessionStorage} from 'ngx-webstorage';
import {tap} from 'rxjs/operators';

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

    constructor(public orderStateFacade: OrderStateFacade,
                public alertController: AlertController,
                public cd: ChangeDetectorRef
    ) {
    }

    public ngOnInit(): void {
        this.orderStateFacade.initializeListeners();
        this.orderStateFacade.menuGroupItems.pipe(tap(menuGroups => {
            this.menuGroups = menuGroups;
            this.cd.detectChanges();
        })).subscribe();
        this.orderStateFacade.menuItems.pipe(tap(menuItems => {
            this.menuItems = menuItems;
            this.cd.detectChanges();
        })).subscribe();
        this.orderStateFacade.groupTitle.pipe(tap(groupTitle => {
            this.groupTitle = groupTitle;
        })).subscribe();

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


    public goBack(): void {
        console.log(this.groupTitle);
        if (this.groupTitle === 'Drinks') {
            this.orderStateFacade.loadMenuGroups('groups-drink');
        } else if (this.groupTitle === 'Food') {
            this.orderStateFacade.loadMenuGroups('groups-food');
        }
        // @ts-ignore
        // this.orderStateFacade.groupTitle.pipe((groupTitle) => {
        //     // @ts-ignore
        //     console.log(groupTitle)
        //     if (groupTitle === 'drinks') {
        //         this.orderStateFacade.loadMenuGroups('groups-drinks');
        //     } else {
        //         this.orderStateFacade.loadMenuGroups('groups-food');
        //     }
        // }).subscribe();
    }

    getMenuItem(menuItems: any) {
        console.log(menuItems);
        this.orderStateFacade.loadMenuItems(menuItems);
    }
}
