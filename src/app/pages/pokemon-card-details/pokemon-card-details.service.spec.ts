import { TestBed } from '@angular/core/testing';

import { PokemonCardDetailsService } from './pokemon-card-details.service';

describe('PokemonCardDetailsService', () => {
  let service: PokemonCardDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonCardDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
