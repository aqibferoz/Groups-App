import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalPage } from './conditional.page';

describe('ConditionalPage', () => {
  let component: ConditionalPage;
  let fixture: ComponentFixture<ConditionalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
