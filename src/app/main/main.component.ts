import { Component, OnInit } from '@angular/core';
import { RestService } from 'libs/ng-data-rest';

import GroupModel from './group/group.model';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private restService: RestService) {
      this.restService.register(GroupModel);
  }

  ngOnInit() {
      this.restService.query(GroupModel, {}).then((list)=>{
          console.log(list);
      })
  }

}
