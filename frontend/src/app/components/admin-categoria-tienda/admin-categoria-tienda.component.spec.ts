import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoriaTiendaComponent } from './admin-categoria-tienda.component';

describe('AdminCategoriaTiendaComponent', () => {
  let component: AdminCategoriaTiendaComponent;
  let fixture: ComponentFixture<AdminCategoriaTiendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCategoriaTiendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCategoriaTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
