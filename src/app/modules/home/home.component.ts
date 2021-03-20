import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(public router: Router,
              public localStorage: LocalStorageService,
              public route: ActivatedRoute) { }

  ngOnInit() {}

  goToApp() {
    this.localStorage.store('tenant', 'show');
    this.router.navigate(['tabs/food'], {relativeTo: this.route});
  }
}
