import {Component, Input, OnInit} from '@angular/core';
import {GroupingDto} from '../../../model/grouping.dto';

@Component({
  selector: 'app-group-items',
  templateUrl: './group-items.component.html',
  styleUrls: ['./group-items.component.scss'],
})
export class GroupItemsComponent implements OnInit {
  @Input()
  menuGroups: GroupingDto[];

  constructor() { }

  ngOnInit() {
  }

}
