/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SkillesComponent } from './skilles.component';

describe('SkillesComponent', () => {
  let component: SkillesComponent;
  let fixture: ComponentFixture<SkillesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
