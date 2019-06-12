import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescConsVowPage } from './desc-cons-vow.page';

describe('DescConsVowPage', () => {
  let component: DescConsVowPage;
  let fixture: ComponentFixture<DescConsVowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescConsVowPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescConsVowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
