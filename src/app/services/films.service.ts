import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmentApi } from '../../environments/environment.development';
import { show, TipiShowTime } from '../model/dati';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(private http: HttpClient) { }

  searchTitleMovies(v: string): Observable<TipiShowTime[]> {
    return this.http.get<TipiShowTime[]>(environmentApi.ricerca + v)
  }

  searchById(id: number): Observable<show> {
    return this.http.get<show>(environmentApi.ricercaId + id)
  }
}
