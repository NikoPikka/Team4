import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoresTabPage } from './scores-tab.page';

describe('ScoresTabPage', () => {
  let component: ScoresTabPage;
  let fixture: ComponentFixture<ScoresTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoresTabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoresTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
