import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GanadorsacerdoteComponent } from './ganadorsacerdote.component';

describe('GanadorsacerdoteComponent', () => {
  let component: GanadorsacerdoteComponent;
  let fixture: ComponentFixture<GanadorsacerdoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GanadorsacerdoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GanadorsacerdoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
