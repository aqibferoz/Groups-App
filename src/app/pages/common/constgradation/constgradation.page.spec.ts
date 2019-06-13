import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstgradationPage } from './constgradation.page';

describe('ConstgradationPage', () => {
  let component: ConstgradationPage;
  let fixture: ComponentFixture<ConstgradationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstgradationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstgradationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
