import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescVbGroup6PresentPage } from './desc-vb-group6-present.page';

describe('DescVbGroup6PresentPage', () => {
  let component: DescVbGroup6PresentPage;
  let fixture: ComponentFixture<DescVbGroup6PresentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescVbGroup6PresentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescVbGroup6PresentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
