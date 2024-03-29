import { Component } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public isLoginModalVisible = false;

  showLogin() {
    this.isLoginModalVisible = true;
  }

  hideLogin() {
    this.isLoginModalVisible = false;
  }

  showPopup: boolean = false;

  openPopup() {
    this.showPopup = true;
  }

  hideRegister(){
    this.showPopup = false;
  }
  
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  userName: string = '';

    constructor(private userService: UserServiceService, private router:Router ,private signInService:LoginService, private registerService: RegisterService,private http: HttpClient) {} // Inject RegisterService and HttpClient

    submitForm(firstName: string, lastName: string, userName: string, email: string, password: string) {
      // Define an array of required fields
      const requiredFields = [firstName, lastName, userName, email, password];
    
      // Check if any of the required fields are blank
      if (requiredFields.some((field) => !field || field.trim() === '')) {
        // At least one required field is blank; show an alert to the user
        alert('Fill in all required fields');
      } else {
        // All required fields are filled; proceed with the form submission
        const formData = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          userName: userName,
        };
    
        console.log('Data Object:', formData);
    
        this.registerService.signUp(formData).subscribe({
          next: (response) => {
            console.log('Form submitted successfully:', response);
            alert('Registered successfully');
            this.showPopup = false;
          },
          error: (error) => {
            console.error('Form submission error:', error);
            alert("Couldn't register account");
          },
          complete: () => {
            
            
       } });
      }
    
    }
    
    
    
login(userName: String, password:string) {
  
  const formData = {
    password: password,
    userName: userName,
  };
  
  console.log('Data Object:', formData);

  this.signInService.signin(formData).subscribe({
    next: (response:any) => {
      if (response.jwt) {
        // Extract the token from the response
        const authToken = response.jwt;
        // Store the token in localStorage or a more secure storage solution
        localStorage.setItem('authToken', authToken);
        this.userService.setUserData(response.user)
       
      
        // Optionally, you can navigate to another page after successful login
        // this.router.navigate(['/dashboard']);
      } else {
        // Handle the case where the response doesn't contain a token
        console.error('No token received in the response');
        alert("Account does not exist, create new account")           
      }
      console.log('Logged in successfully:', response);
    
      this.isLoginModalVisible = false;
      this.router.navigate(["/profile"])
      
    },
    error: (error) => {
      console.error(' logging in error:', error);
      alert("Username or password is incorrect")
    },
    complete: () => {

    },
  });  
  
  
}
    
}

