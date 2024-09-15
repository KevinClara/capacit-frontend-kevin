import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTrabajoComponent } from './registrar-trabajo.component';

describe('RegistrarTrabajoComponent', () => {
  let component: RegistrarTrabajoComponent;
  let fixture: ComponentFixture<RegistrarTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarTrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
