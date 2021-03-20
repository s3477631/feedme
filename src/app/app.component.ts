import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {LocalStorageService} from 'ngx-webstorage';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar
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
}
