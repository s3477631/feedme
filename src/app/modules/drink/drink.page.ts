import {Component, OnInit} from '@angular/core';
import {MenuExplorerService} from '../../services/menu-explorer.service';

@Component({
  selector: 'app-tab-drink',
  templateUrl: 'drink.page.html',
  styleUrls: ['drink.page.scss']
})
export class DrinkPage implements OnInit {

  constructor(public menuExplorerService: MenuExplorerService) {}
  ngOnInit() {
    this.menuExplorerService.getDrinkMenu();
  }
}
