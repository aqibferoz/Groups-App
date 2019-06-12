import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescVbGroup5PresentPage } from './desc-vb-group5-present.page';

describe('DescVbGroup5PresentPage', () => {
  let component: DescVbGroup5PresentPage;
  let fixture: ComponentFixture<DescVbGroup5PresentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescVbGroup5PresentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescVbGroup5PresentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
