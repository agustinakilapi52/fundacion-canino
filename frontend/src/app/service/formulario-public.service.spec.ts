import { TestBed } from '@angular/core/testing';

import { FormularioPublicService } from './formulario-public.service';

describe('FormularioPublicService', () => {
  let service: FormularioPublicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormularioPublicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
