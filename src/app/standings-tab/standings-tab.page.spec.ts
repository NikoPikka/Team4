import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingsTabPage } from './standings-tab.page';

describe('StandingsTabPage', () => {
  let component: StandingsTabPage;
  let fixture: ComponentFixture<StandingsTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandingsTabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingsTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
