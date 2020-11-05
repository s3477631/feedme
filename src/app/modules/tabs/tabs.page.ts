import { Component } from '@angular/core';
import {OrderStateFacade} from '../../facade/order-state.facade';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public orderStateFacade: OrderStateFacade) {
  }

}
