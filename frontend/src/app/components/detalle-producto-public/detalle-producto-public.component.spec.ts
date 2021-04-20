import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleProductoPublicComponent } from './detalle-producto-public.component';

describe('DetalleProductoPublicComponent', () => {
  let component: DetalleProductoPublicComponent;
  let fixture: ComponentFixture<DetalleProductoPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleProductoPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleProductoPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
