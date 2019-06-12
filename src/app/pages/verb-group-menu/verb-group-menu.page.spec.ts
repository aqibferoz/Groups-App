import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbGroupMenuPage } from './verb-group-menu.page';

describe('VerbGroupMenuPage', () => {
  let component: VerbGroupMenuPage;
  let fixture: ComponentFixture<VerbGroupMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerbGroupMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbGroupMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
