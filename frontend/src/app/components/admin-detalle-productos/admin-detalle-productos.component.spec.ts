import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetalleProductosComponent } from './admin-detalle-productos.component';

describe('AdminDetalleProductosComponent', () => {
  let component: AdminDetalleProductosComponent;
  let fixture: ComponentFixture<AdminDetalleProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDetalleProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDetalleProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
