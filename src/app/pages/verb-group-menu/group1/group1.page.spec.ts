import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Group1Page } from './group1.page';

describe('Group1Page', () => {
  let component: Group1Page;
  let fixture: ComponentFixture<Group1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Group1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Group1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
