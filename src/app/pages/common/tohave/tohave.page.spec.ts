import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TohavePage } from './tohave.page';

describe('TohavePage', () => {
  let component: TohavePage;
  let fixture: ComponentFixture<TohavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TohavePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TohavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
