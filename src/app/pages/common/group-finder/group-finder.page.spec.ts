import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupFinderPage } from './group-finder.page';

describe('GroupFinderPage', () => {
  let component: GroupFinderPage;
  let fixture: ComponentFixture<GroupFinderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupFinderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupFinderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
