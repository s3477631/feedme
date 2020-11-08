import {Component, OnInit} from '@angular/core';
import {OrderStateFacade} from '../../facade/order-state.facade';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
    public selectedMenuItem = 'food';

    constructor(public orderStateFacade: OrderStateFacade, public activatedRoute: ActivatedRoute, public router: Router) {
    }

    ngOnInit() {
        this.orderStateFacade.initializeListeners();
        this.orderStateFacade.clearGroupOptions();
        // console.log(this.activatedRoute.snapshot._routerState['url'])
        this.orderStateFacade.loadMenuGroups(`groups-food`);
    }

//   this.orderStateFacade.clearGroupOptions();
    navigateMe(page: string) {
        this.orderStateFacade.initializeListeners();
        this.orderStateFacade.clearGroupOptions();
        this.selectedMenuItem = page;
        this.orderStateFacade.loadMenuGroups(`groups-${page}`);
        this.router.navigate([`${page}`], {relativeTo: this.activatedRoute});
    }

    selectedOption(selected: string): string {
        if (selected === this.selectedMenuItem) {
            return 'tabs-buttons highlight-option';
        } else {
            return 'tabs-buttons';
        }
    }
}
