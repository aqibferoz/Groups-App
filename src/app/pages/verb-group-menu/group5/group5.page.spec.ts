import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Group5Page } from './group5.page';

describe('Group5Page', () => {
  let component: Group5Page;
  let fixture: ComponentFixture<Group5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Group5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Group5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
