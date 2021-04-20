import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductosTiendaComponent } from './admin-productos-tienda.component';

describe('AdminProductosTiendaComponent', () => {
  let component: AdminProductosTiendaComponent;
  let fixture: ComponentFixture<AdminProductosTiendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProductosTiendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductosTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
