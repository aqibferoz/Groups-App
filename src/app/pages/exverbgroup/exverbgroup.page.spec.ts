import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExverbgroupPage } from './exverbgroup.page';

describe('ExverbgroupPage', () => {
  let component: ExverbgroupPage;
  let fixture: ComponentFixture<ExverbgroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExverbgroupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExverbgroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
