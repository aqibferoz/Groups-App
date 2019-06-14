import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Group6Page } from './group6.page';

describe('Group6Page', () => {
  let component: Group6Page;
  let fixture: ComponentFixture<Group6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Group6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Group6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
