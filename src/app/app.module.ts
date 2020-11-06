import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {InterceptorsModule} from './interceptor/interceptor.module';
import {HttpClientModule} from '@angular/common/http';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {NgrxModule} from './store/module/ngrx.module';
import {HomeComponent} from './modules/home/home.component';



@NgModule({
    declarations: [AppComponent, HomeComponent],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(),
        HttpClientModule,
        InterceptorsModule,
        NgxWebstorageModule.forRoot(),
        AppRoutingModule,
        NgrxModule,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
