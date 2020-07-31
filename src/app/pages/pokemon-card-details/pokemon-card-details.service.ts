import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import ICardResponse  from '../../interfaces/card-response';
@Injectable({
  providedIn: 'root'
})
export class PokemonCardDetailsService {

  readonly baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {
  }

  getPokemonCard(id: string): Observable<ICardResponse> {
    return this.http.get<ICardResponse>(`${this.baseUrl}/cards/${id}`);
  }
}
