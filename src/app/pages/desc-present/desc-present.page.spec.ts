import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescPresentPage } from './desc-present.page';

describe('DescPresentPage', () => {
  let component: DescPresentPage;
  let fixture: ComponentFixture<DescPresentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescPresentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescPresentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
