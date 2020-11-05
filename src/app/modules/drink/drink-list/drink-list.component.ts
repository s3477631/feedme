import { Component, OnInit } from '@angular/core';
import {MenuExplorerService} from '../../../services/menu-explorer.service';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss'],
})
export class DrinkListComponent implements OnInit {

  constructor(private menuExplorerService: MenuExplorerService) { }

  ngOnInit() {
    this.menuExplorerService.getDrinkMenu();
  }

}
