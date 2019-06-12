import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescVbGroup1PresentPage } from './desc-vb-group1-present.page';

describe('DescVbGroup1PresentPage', () => {
  let component: DescVbGroup1PresentPage;
  let fixture: ComponentFixture<DescVbGroup1PresentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescVbGroup1PresentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescVbGroup1PresentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
