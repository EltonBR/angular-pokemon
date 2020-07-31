import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import  ICards  from '../../interfaces/cards';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokemonListService {
  readonly baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {
  }

  getPokemons(page = 1, pageSize = 10): Observable<ICards> {
    return this.http.get(`${this.baseUrl}/cards?page${page}&pageSize=${pageSize}`);
  }
}
