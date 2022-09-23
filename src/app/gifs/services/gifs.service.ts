import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Gifs } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  api:string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  buscar(valor:string){
    return this.http.get<Gifs>(`${this.api}&q=${valor}&limit=10`)
  }
}
