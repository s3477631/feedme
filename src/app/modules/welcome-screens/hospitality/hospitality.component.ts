import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuServiceService} from '../../../services/menu-service.service';

@Component({
    selector: 'app-hospitality',
    templateUrl: './hospitality.component.html',
    styleUrls: ['./hospitality.component.scss'],
})
export class HospitalityComponent implements OnInit {

    constructor(public localStorage: LocalStorageService,
                private menuService: MenuServiceService,
                public route: ActivatedRoute,
                public router: Router) {
    }

    public ngOnInit() {
    }

    public goToHospitalityApp() {
        this.localStorage.store('tenant', 'show-food');
        this.menuService.setDemo();
        this.router.navigate(['tabs/food'], {relativeTo: this.route});
    }

    goToBeautyApp() {
        this.localStorage.store('tenant', 'show-beauty');
        this.menuService.setDemo();
        this.router.navigate(['tabs/food'], {relativeTo: this.route});
    }
}
