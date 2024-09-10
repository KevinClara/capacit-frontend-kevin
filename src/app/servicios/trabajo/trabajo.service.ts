import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trabajo } from 'src/app/models/trabajo/trabajo';

@Injectable({
  providedIn: 'root'
})
export class TrabajoService {

  private baseURL = 'http://localhost:8080/api/v1/trabajos';
  
  constructor(private httpClient:HttpClient){}

  trabajosLista():Observable<Trabajo[]>{
    return this.httpClient.get<Trabajo[]>(`${this.baseURL}`);
  }

  getTrabajoById(id:Number):Observable<Trabajo>{
    return this.httpClient.get<Trabajo>(`${this.baseURL}/id/${id}`);
  }

  eliminarTrabajo(id:Number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
