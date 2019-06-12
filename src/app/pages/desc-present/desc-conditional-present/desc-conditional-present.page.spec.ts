import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescConditionalPresentPage } from './desc-conditional-present.page';

describe('DescConditionalPresentPage', () => {
  let component: DescConditionalPresentPage;
  let fixture: ComponentFixture<DescConditionalPresentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescConditionalPresentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescConditionalPresentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
