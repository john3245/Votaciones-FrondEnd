import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ganadormatrimonio50Component } from './ganadormatrimonio50.component';

describe('Ganadormatrimonio50Component', () => {
  let component: Ganadormatrimonio50Component;
  let fixture: ComponentFixture<Ganadormatrimonio50Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ganadormatrimonio50Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ganadormatrimonio50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
