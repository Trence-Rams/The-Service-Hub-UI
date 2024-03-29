import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyregistrationService {

  private apiEndpoint = 'http://localhost:8080/service/add';

  constructor(private http: HttpClient) {}

  registerCompany(data: any)  {


    const authToken = localStorage.getItem('authToken');

    // Create headers with the Authorization field set to the JWT
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`,
    });
  
    console.log(data);
    console.log(headers)
    return this.http.post(this.apiEndpoint, data,{headers});
  }
}
