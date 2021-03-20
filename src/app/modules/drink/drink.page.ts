import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {OrderStateFacade} from '../../facade/order-state.facade';
import {tap} from 'rxjs/operators';
import {DrinkMenuStateFacade} from '../../facade/drink-menu-state.facade';
import {Router} from '@angular/router';
import {UtilStateFacade} from '../../facade/util-state.facade';


@Component({
    selector: 'app-tab-drink',
    templateUrl: 'drink.page.html',
    styleUrls: ['drink.page.scss']
})
export class DrinkPage implements OnInit {
    public menuGroups;
    public menuItems;
    constructor(public drinkMenuStateFacade: DrinkMenuStateFacade,
                private utilStateFacade: UtilStateFacade,
                public route: Router
                ) {
    }

    ngOnInit() {
        this.drinkMenuStateFacade.initializeListeners();
        this.drinkMenuStateFacade.getDrinkGroups();
    }


    public goBack(): void {
        this.route.navigate(['tabs', 'drink']);
        this.utilStateFacade.backButton(false);
    }
}
