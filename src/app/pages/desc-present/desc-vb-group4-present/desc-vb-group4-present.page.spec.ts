import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescVbGroup4PresentPage } from './desc-vb-group4-present.page';

describe('DescVbGroup4PresentPage', () => {
  let component: DescVbGroup4PresentPage;
  let fixture: ComponentFixture<DescVbGroup4PresentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescVbGroup4PresentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescVbGroup4PresentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
