import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrimoniosnominadosComponent } from './matrimoniosnominados.component';

describe('MatrimoniosnominadosComponent', () => {
  let component: MatrimoniosnominadosComponent;
  let fixture: ComponentFixture<MatrimoniosnominadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrimoniosnominadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrimoniosnominadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
