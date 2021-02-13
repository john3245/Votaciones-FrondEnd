import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Finalistassacerdote50Component } from './finalistassacerdote50.component';

describe('Finalistassacerdote50Component', () => {
  let component: Finalistassacerdote50Component;
  let fixture: ComponentFixture<Finalistassacerdote50Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Finalistassacerdote50Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Finalistassacerdote50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
