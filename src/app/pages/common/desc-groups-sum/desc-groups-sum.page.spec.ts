import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescGroupsSumPage } from './desc-groups-sum.page';

describe('DescGroupsSumPage', () => {
  let component: DescGroupsSumPage;
  let fixture: ComponentFixture<DescGroupsSumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescGroupsSumPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescGroupsSumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
