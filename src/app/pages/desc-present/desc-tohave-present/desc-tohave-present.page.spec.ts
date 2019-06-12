import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescTohavePresentPage } from './desc-tohave-present.page';

describe('DescTohavePresentPage', () => {
  let component: DescTohavePresentPage;
  let fixture: ComponentFixture<DescTohavePresentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescTohavePresentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescTohavePresentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
