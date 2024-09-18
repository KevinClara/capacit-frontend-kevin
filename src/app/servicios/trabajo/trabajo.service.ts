import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departamento, Trabajo } from 'src/app/models/trabajo/trabajo';

@Injectable({
  providedIn: 'root'
})
export class TrabajoService {

  private baseURL = 'http://localhost:8080/api/v1/trabajos';
  private departamentosURL = 'http://localhost:8080/api/v1/departamentos';
  
  constructor(private httpClient:HttpClient){}

  trabajosLista():Observable<Trabajo[]>{
    return this.httpClient.get<Trabajo[]>(`${this.baseURL}`);
  }

  getTrabajoById(id:Number):Observable<Trabajo>{
    return this.httpClient.get<Trabajo>(`${this.baseURL}/id/${id}`);
  }

  actualizarTrabajo(id:number, trabajo:Trabajo) : Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, trabajo);
  }

  eliminarTrabajo(id:Number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  registrarTrabajo(trabajo:Trabajo):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, trabajo);
  }

  obtenerDepartamentos(): Observable<Departamento[]> {
    return this.httpClient.get<Departamento[]>(this.departamentosURL);
  }
}
