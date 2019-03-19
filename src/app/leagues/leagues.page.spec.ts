import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaguesPage } from './leagues.page';

describe('LeaguesPage', () => {
  let component: LeaguesPage;
  let fixture: ComponentFixture<LeaguesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaguesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaguesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
