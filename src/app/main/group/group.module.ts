import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group.component';
import { RestModule } from 'libs/ng-data-rest';

@NgModule({
  imports: [
    CommonModule,
    RestModule
  ],
  declarations: [GroupComponent]
})
export class GroupModule { }
