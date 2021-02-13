import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SacerdotenomidadosComponent } from './sacerdotenomidados.component';

describe('SacerdotenomidadosComponent', () => {
  let component: SacerdotenomidadosComponent;
  let fixture: ComponentFixture<SacerdotenomidadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SacerdotenomidadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SacerdotenomidadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
