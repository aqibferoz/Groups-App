import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisemenuPage } from './exercisemenu.page';

describe('ExercisemenuPage', () => {
  let component: ExercisemenuPage;
  let fixture: ComponentFixture<ExercisemenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercisemenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisemenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
