import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPage } from './common.page';

describe('CommonPage', () => {
  let component: CommonPage;
  let fixture: ComponentFixture<CommonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
