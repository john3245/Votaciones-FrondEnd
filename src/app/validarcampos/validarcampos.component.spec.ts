import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarcamposComponent } from './validarcampos.component';

describe('ValidarcamposComponent', () => {
  let component: ValidarcamposComponent;
  let fixture: ComponentFixture<ValidarcamposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidarcamposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarcamposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
