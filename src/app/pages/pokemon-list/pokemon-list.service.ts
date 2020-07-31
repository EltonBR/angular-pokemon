import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import  ICards  from '../../interfaces/cards';
import { Observable } from 'rxjs';
import { map, shareReplay, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonListService {
  readonly baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {
  }

  getPokemons(page = 1, pageSize = 1000): Observable<ICards> {
    return this.http.get<ICards>(`${this.baseUrl}/cards?page${page}&pageSize=${pageSize}`).pipe(shareReplay(0.5));
  }
  
}
