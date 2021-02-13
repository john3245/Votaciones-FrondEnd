import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Finalistas70Component } from './finalistas70.component';

describe('Finalistas70Component', () => {
  let component: Finalistas70Component;
  let fixture: ComponentFixture<Finalistas70Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Finalistas70Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Finalistas70Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
