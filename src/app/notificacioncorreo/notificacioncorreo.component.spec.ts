import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacioncorreoComponent } from './notificacioncorreo.component';

describe('NotificacioncorreoComponent', () => {
  let component: NotificacioncorreoComponent;
  let fixture: ComponentFixture<NotificacioncorreoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificacioncorreoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificacioncorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
