import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {OrderStateFacade} from '../../facade/order-state.facade';
import {tap} from 'rxjs/operators';


@Component({
    selector: 'app-tab-drink',
    templateUrl: 'drink.page.html',
    styleUrls: ['drink.page.scss']
})
export class DrinkPage implements OnInit {
    public menuGroups;
    public menuItems;

    constructor(public orderStateFacade: OrderStateFacade, public cd: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.orderStateFacade.initializeListeners();
        this.orderStateFacade.menuGroupItems.pipe(tap(menuGroups => {
            this.menuGroups = menuGroups;
            this.cd.detectChanges();
        })).subscribe();
        this.orderStateFacade.menuItems.pipe(tap(menuItems =>{
            this.menuItems = menuItems;
            this.cd.detectChanges();
        })).subscribe();
    }


}
