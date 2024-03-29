import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

    constructor(private http: HttpClient) { }
  
    sendRequest(service_id: number, formData:any) {
      const apiUrlfull = `http://localhost:8080/request/send/${service_id}`;
      return this.http.post(apiUrlfull,formData);
    }

    getRequests(service_id: number): Observable<any[]>{
      const apiUrlfull = `http://localhost:8080/request/receive/${1}`;
      return this.http.get<any[]>(apiUrlfull);
    }

  }
  

