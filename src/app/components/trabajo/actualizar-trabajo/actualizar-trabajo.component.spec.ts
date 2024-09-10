import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarTrabajoComponent } from './actualizar-trabajo.component';

describe('ActualizarTrabajoComponent', () => {
  let component: ActualizarTrabajoComponent;
  let fixture: ComponentFixture<ActualizarTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarTrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
