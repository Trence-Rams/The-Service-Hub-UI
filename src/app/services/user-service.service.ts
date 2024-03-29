import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private userData: any; 


  getUserData(){
    return this.userData;
  }
  setUserData(userData: any){
    this.userData = userData;
  }

  
}
