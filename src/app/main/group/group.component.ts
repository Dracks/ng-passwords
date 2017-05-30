import { Component, OnInit } from '@angular/core';
import { RestService } from "libs/ng-data-rest";

import GroupModel from './group.model';
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  constructor(private service: RestService) {
      service.register(GroupModel);
   }

  ngOnInit() {
  }

}
