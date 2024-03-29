import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiEndpoint = 'http://localhost:8080/auth/login';

  constructor(private http: HttpClient) {}

  signin(data: any)  {
    console.log(data);
    return this.http.post(this.apiEndpoint, data);
  }
}
