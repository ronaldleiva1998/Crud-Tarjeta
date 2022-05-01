import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
private myAppUrl= 'https://localhost:44346/';
private myApiurl= 'api/tarjeta/'

  constructor(private http: HttpClient) { }

  getlistTarjetas(): Observable<any> {
  return this.http.get(this.myAppUrl + this.myApiurl);
  }

  deleteTarjeta(id:number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiurl + id)
  }
  saveTarjeta(tarjeta: any):Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiurl ,tarjeta);
  }

  updateTarjeta(id:number,tarjeta: any):Observable<any>{
    return this.http.put(this.myAppUrl + this.myApiurl + id, tarjeta)
  }
}
