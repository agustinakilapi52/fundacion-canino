import { TestBed } from '@angular/core/testing';

import { AdminProductosTiendaService } from './admin-productos-tienda.service';

describe('AdminProductosTiendaService', () => {
  let service: AdminProductosTiendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminProductosTiendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
