import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Finalistassacerdote70Component } from './finalistassacerdote70.component';

describe('Finalistassacerdote70Component', () => {
  let component: Finalistassacerdote70Component;
  let fixture: ComponentFixture<Finalistassacerdote70Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Finalistassacerdote70Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Finalistassacerdote70Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
