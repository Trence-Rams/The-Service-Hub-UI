import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceDetailsService {

  constructor(private http: HttpClient) { }

  getServiceDetails(service_id: number): Observable<any>{
    const apiUrlfull = `http://localhost:8080/service/${service_id}`;
    return this.http.get<any>(apiUrlfull);
  }
}
