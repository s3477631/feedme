import {Component, OnDestroy, OnInit} from '@angular/core';
import {UtilStateFacade} from '../../facade/util-state.facade';
import {MenuServiceService} from '../../services/menu-service.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-tab-order',
    templateUrl: 'order.page.html',
    styleUrls: ['order.page.scss']
})
export class OrderPage implements OnInit, OnDestroy {
    private Subscriptions: Subscription = new Subscription();

    constructor(public utilStateFacade: UtilStateFacade,
                public menuService: MenuServiceService
    ) {
    }

    public ngOnInit() {
    }

    public ngOnDestroy(): void {
        this.Subscriptions.unsubscribe();
    }

}
