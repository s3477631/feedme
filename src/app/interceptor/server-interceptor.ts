import {Observable, of} from 'rxjs';
import {LocalStorageService} from 'ngx-webstorage';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {DemoMenuService} from '../services/demo-menu/demo-menu.service';


export class ServerUrlInterceptor implements HttpInterceptor {

    constructor(
        private localStorage: LocalStorageService,
        private demoService: DemoMenuService
    ) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url.indexOf('http') < 0 && this.localStorage.retrieve('tenant') != null) {
            const serverUrl = this.localStorage.retrieve('tenant');
            if (serverUrl && serverUrl.substr(0, 4) === 'show') {
                return of(new HttpResponse({body: this.demoService.getResponseFor(request.method, request.urlWithParams, request.body)}));
            } else {
                request = request.clone({
                    url: `https://${this.localStorage.retrieve('tenant')}.feed-me-now.menu/prod/${request.url}`
                });
            }
        }
        return next.handle(request);
    }
}
