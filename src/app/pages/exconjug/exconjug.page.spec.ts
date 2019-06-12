import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExconjugPage } from './exconjug.page';

describe('ExconjugPage', () => {
  let component: ExconjugPage;
  let fixture: ComponentFixture<ExconjugPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExconjugPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExconjugPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
