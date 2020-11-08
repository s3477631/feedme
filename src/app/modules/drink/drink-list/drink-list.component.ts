import { Component, OnInit } from '@angular/core';
import {MenuExplorerService} from '../../../services/menu-explorer.service';
import {SwiperOptions} from 'swiper';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss'],
})
export class DrinkListComponent implements OnInit {
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    spaceBetween: 5,
    slidesPerView: 2,
    loop: true
  };
  constructor(private menuExplorerService: MenuExplorerService) { }

  ngOnInit() {
    this.menuExplorerService.getDrinkMenu();
  }

}
