import { Component, OnInit } from '@angular/core';

import { RestService } from 'libs/ng-data-rest';

import GroupModel from '../group.model';

@Component({
  selector: 'app-group-tree-root',
  templateUrl: './group-tree-root.component.html',
  styleUrls: ['./group-tree-root.component.scss']
})
export class GroupTreeRootComponent implements OnInit {

    rootNodes: GroupModel[]

    constructor(private restService: RestService) {
        this.restService.register(GroupModel);
    }

  ngOnInit() {
      this.restService.query(GroupModel, {}).then((list) => {
            this.rootNodes= list.results
        });
  }

}
