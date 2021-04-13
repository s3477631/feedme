import {Component} from '@angular/core';

import {MenuController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {LocalStorageService} from 'ngx-webstorage';
import {Router} from '@angular/router';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private localStorage: LocalStorageService,
        private menu: MenuController,
        private route: Router,
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.runCont();
        });

    }

    runCont() {
        // tslint:disable-next-line:no-console
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
    //                     // this.router.navigate('/')
    //                 }
    //             }
    //         ]
    //     });
    //     await alert.present();
    // }
    public logOut(): void {
        this.menu.close('side-menu');
        this.localStorage.clear('tenant');
        this.route.navigateByUrl('/').then(() => {}).catch((err) => console.log(err));
    }
}
