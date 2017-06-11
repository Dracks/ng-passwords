import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupTreeRootComponent } from './group-tree-root.component';

describe('GroupTreeRootComponent', () => {
  let component: GroupTreeRootComponent;
  let fixture: ComponentFixture<GroupTreeRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupTreeRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupTreeRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
