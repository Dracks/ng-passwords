import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { GroupModule } from './group/group.module';
import { GroupTreeComponent } from './group/group-tree/group-tree.component';

@NgModule({
    imports: [
        CommonModule,
        GroupModule
    ],
    declarations: [
        MainComponent,
    ]
})
export class MainModule { }
