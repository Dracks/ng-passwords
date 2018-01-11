import { Component } from '@angular/core';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericTreeComponent } from './generic-tree.component';

@Component({
    template: '<app-generic-tree>Hello World</app-generic-tree>'
})
class TestComponent {

}

fdescribe('GenericTreeComponent', () => {
    let component: GenericTreeComponent;
    let fixture: ComponentFixture<GenericTreeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                GenericTreeComponent,
                TestComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GenericTreeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
