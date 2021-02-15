import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ganadorsacerdote50Component } from './ganadorsacerdote50.component';

describe('Ganadorsacerdote50Component', () => {
  let component: Ganadorsacerdote50Component;
  let fixture: ComponentFixture<Ganadorsacerdote50Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ganadorsacerdote50Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ganadorsacerdote50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
