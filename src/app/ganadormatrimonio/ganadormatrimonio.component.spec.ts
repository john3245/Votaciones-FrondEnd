import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GanadormatrimonioComponent } from './ganadormatrimonio.component';

describe('GanadormatrimonioComponent', () => {
  let component: GanadormatrimonioComponent;
  let fixture: ComponentFixture<GanadormatrimonioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GanadormatrimonioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GanadormatrimonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
