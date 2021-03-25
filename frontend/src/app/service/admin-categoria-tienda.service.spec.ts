import { TestBed } from '@angular/core/testing';

import { AdminCategoriaTiendaService } from './admin-categoria-tienda.service';

describe('AdminCategoriaTiendaService', () => {
  let service: AdminCategoriaTiendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminCategoriaTiendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
