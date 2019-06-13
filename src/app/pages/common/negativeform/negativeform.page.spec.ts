import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativeformPage } from './negativeform.page';

describe('NegativeformPage', () => {
  let component: NegativeformPage;
  let fixture: ComponentFixture<NegativeformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegativeformPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegativeformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
