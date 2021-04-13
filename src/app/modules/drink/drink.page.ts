import {Component, OnInit} from '@angular/core';
import {DrinkMenuStateFacade} from '../../facade/drink-menu-state.facade';
import {Router} from '@angular/router';
import {UtilStateFacade} from '../../facade/util-state.facade';
import {MenuServiceService} from '../../services/menu-service.service';
import {MenuController} from '@ionic/angular';


@Component({
    selector: 'app-tab-drink',
    templateUrl: 'drink.page.html',
    styleUrls: ['drink.page.scss']
})
export class DrinkPage implements OnInit {
    public menuItems;
    constructor(public drinkMenuStateFacade: DrinkMenuStateFacade,
                private utilStateFacade: UtilStateFacade,
                private menuService: MenuServiceService,
                private menu: MenuController,
                public route: Router
                ) {
    }

    ngOnInit() {
        this.drinkMenuStateFacade.initializeListeners();
        this.drinkMenuStateFacade.getDrinkGroups();
    }
    public openSide(){
        this.menu.open('side-menu').then(() => {});
    }

    public routeBack(): void {
        this.route.navigate(['tabs', 'drink']);
        this.utilStateFacade.backButton(false);
    }
}
