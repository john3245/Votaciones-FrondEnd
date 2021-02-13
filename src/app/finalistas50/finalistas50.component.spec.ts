import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Finalistas50Component } from './finalistas50.component';

describe('Finalistas50Component', () => {
  let component: Finalistas50Component;
  let fixture: ComponentFixture<Finalistas50Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Finalistas50Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Finalistas50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
