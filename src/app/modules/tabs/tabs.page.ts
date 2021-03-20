import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {OrderStateFacade} from '../../facade/order-state.facade';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
    public selectedMenuItem = 'food';

    constructor(public orderStateFacade: OrderStateFacade,
                public cd: ChangeDetectorRef,
                public route: ActivatedRoute, public router: Router) {
    }

    ngOnInit() {
        this.orderStateFacade.initializeListeners();

        // console.log(this.activatedRoute.snapshot._routerState['url'])
        // this.orderStateFacade.loadMenuGroups(`groups-food`);
    }

//   this.orderStateFacade.clearGroupOptions();
//     navigateMe(page: string) {
//         console.log(page);
//         this.router.navigateByUrl(`tabs/${page}`, {relativeTo: this.route});
//         if (page !== 'order') {
//
//         } else {
//             console.log('navv')
//             this.router.navigate(['order'], {relativeTo: this.route});
//         }
//     }

    selectedOption(selected: string): string {
        if (selected === this.selectedMenuItem) {
            return 'tabs-buttons highlight-option';
        } else {
            return 'tabs-buttons';
        }
    }


    clearMenuGroup() {
    }
}
