import { TestBed } from '@angular/core/testing';

import { PerfilEditService } from './perfil-edit.service';

describe('PerfilEditService', () => {
  let service: PerfilEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
