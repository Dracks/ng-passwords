import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group.component';
import { RestModule } from 'libs/ng-data-rest';
import { GroupTreeComponent } from './group-tree/group-tree.component';
import { GroupTreeRootComponent } from './group-tree-root/group-tree-root.component';

@NgModule({
    imports: [
        CommonModule,
        RestModule
    ],
    declarations: [
        GroupComponent,
        GroupTreeComponent,
        GroupTreeRootComponent
    ],
    exports: [
        GroupTreeRootComponent
    ]
})
export class GroupModule { }
