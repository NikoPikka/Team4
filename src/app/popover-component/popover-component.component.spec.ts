import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverComponentPage } from './popover-component.page';

describe('PopoverComponentPage', () => {
  let component: PopoverComponentPage;
  let fixture: ComponentFixture<PopoverComponentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverComponentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
