import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiEndpoint = 'http://localhost:8080/auth/register';

  constructor(private http: HttpClient) {}

  signUp(data: any) {
    console.log(data);
    return this.http.post(this.apiEndpoint, data);
  }
}
