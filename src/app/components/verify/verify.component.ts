import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // Extract the token from the URL
    this.route.params.subscribe((params) => {
      const token = params['token'];

      // Send an HTTP request to the backend for verification with the 'token' as a parameter
      this.http.post('http://localhost:8080/auth/verify', null, { params: { token } }).subscribe({
        next: (response) => {
          console.log('Email verified successfully:', response);
          alert("Email verified successfully")
        },
        error: (error) => {
          console.error('Email verification error:', error);
          alert("Email verification unsuccessful")
        },
        complete: () => {
          
             this.router.navigate(['/']);
        },
      });
    });
  }
}
