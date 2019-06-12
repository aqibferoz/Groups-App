import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescVbGroup2PresentPage } from './desc-vb-group2-present.page';

describe('DescVbGroup2PresentPage', () => {
  let component: DescVbGroup2PresentPage;
  let fixture: ComponentFixture<DescVbGroup2PresentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescVbGroup2PresentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescVbGroup2PresentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
