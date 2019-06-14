import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Group3Page } from './group3.page';

describe('Group3Page', () => {
  let component: Group3Page;
  let fixture: ComponentFixture<Group3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Group3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Group3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
