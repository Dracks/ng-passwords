import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { GroupModule } from './group/group.module';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        MainComponent
    ]
})
export class MainModule { }
