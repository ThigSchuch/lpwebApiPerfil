import { TestBed } from '@angular/core/testing';

import { PerfilCreateService } from './perfil-create.service';

describe('PerfilCreateService', () => {
  let service: PerfilCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
