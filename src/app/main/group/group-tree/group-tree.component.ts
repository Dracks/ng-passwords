import { Component, OnInit, Input } from '@angular/core';

import { RestService } from 'libs/ng-data-rest';

import GroupModel from '../group.model';

@Component({
    selector: 'app-group-tree',
    templateUrl: './group-tree.component.html',
    styleUrls: ['./group-tree.component.scss']
})
export class GroupTreeComponent implements OnInit {

    @Input()
    nodes: GroupModel[]

    constructor() {
    }

    ngOnInit() {

    }

}
