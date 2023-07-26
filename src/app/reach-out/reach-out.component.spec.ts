/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReachOutComponent } from './reach-out.component';

describe('ReachOutComponent', () => {
  let component: ReachOutComponent;
  let fixture: ComponentFixture<ReachOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReachOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReachOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
