import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescExceptionsPresentPage } from './desc-exceptions-present.page';

describe('DescExceptionsPresentPage', () => {
  let component: DescExceptionsPresentPage;
  let fixture: ComponentFixture<DescExceptionsPresentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescExceptionsPresentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescExceptionsPresentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
