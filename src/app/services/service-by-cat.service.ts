import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceByCatService {

  constructor(private http: HttpClient) { }

  getServices(category_id: number): Observable<any>{
    const apiUrlfull = `http://localhost:8080/category/${category_id}`;
    return this.http.get<any>(apiUrlfull);
  }
}
