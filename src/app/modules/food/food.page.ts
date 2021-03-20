import {Component, OnInit} from '@angular/core';
import {FoodMenuStateFacade} from '../../facade/food-menu-state.facade';
import {MenuServiceService} from '../../services/menu-service.service';
import {Router} from '@angular/router';
import {UtilStateFacade} from '../../facade/util-state.facade';

@Component({
    selector: 'app-tab-food',
    templateUrl: 'food.page.html',
    styleUrls: ['food.scss']
})
export class FoodPage implements OnInit {
    public showBack: boolean;
    public menuItems;
    public first: string;

    constructor(public foodMenuStateFacade: FoodMenuStateFacade,
                public utilStateFacade: UtilStateFacade,
                private route: Router,
                public menuService: MenuServiceService) {}

    public ngOnInit(): void {
        this.foodMenuStateFacade.initializeListeners();
        this.foodMenuStateFacade.getFoodGroups();
    }
    public routeBack(): void {
        this.route.navigate(['tabs', 'food']);
        this.utilStateFacade.backButton(false);
    }
}
