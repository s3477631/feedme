import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {LocalStorageService} from 'ngx-webstorage';
import {ServerUrlInterceptor} from './server-interceptor';
import {DemoMenuService} from '../services/demo-menu/demo-menu.service';

@NgModule({
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ServerUrlInterceptor,
            multi: true,
            deps: [
                LocalStorageService,
                DemoMenuService
            ]
        }
    ]
})
export class InterceptorsModule {
}
