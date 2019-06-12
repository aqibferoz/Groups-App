import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescNegativePresentPage } from './desc-negative-present.page';

describe('DescNegativePresentPage', () => {
  let component: DescNegativePresentPage;
  let fixture: ComponentFixture<DescNegativePresentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescNegativePresentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescNegativePresentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
