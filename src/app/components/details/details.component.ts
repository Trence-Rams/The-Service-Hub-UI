import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceDetailsService } from 'src/app/services/service-details.service';
import { RequestService } from 'src/app/services/request.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  constructor(private requestService: RequestService, private router: Router, private serviceDetails: ServiceDetailsService, private route: ActivatedRoute) {}
  
  public serviceProvider?: any;


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const providerId = Number(params.get('id'));

      this.serviceDetails.getServiceDetails(providerId).subscribe({
        next: (response: any) => {
         
          this.serviceProvider = response;
          console.log(this.serviceProvider)
        },
        error: (error: any) => {
          console.error('Error:', error);
        },
        complete: () => {
         
        }
      });
    });
  }


  showPopup: boolean = false;

  Request() {
    this.showPopup = true;
  }

  hideRegister(){
    this.showPopup = false;
  }

  user: any;

  phone = ""
  specification =""

  submitRequest(phone: string, specification: string) {
    // Define an array of required fields
    const requiredFields = [phone, specification];
  
    // Check if any of the required fields are blank
    if (requiredFields.some((field) => !field || field.trim() === '')) {
      // At least one required field is blank; show an alert to the user
      alert('Please fill in all required fields');
    } else {
      // All required fields are filled; proceed with the request submission
      const formData = {
        phone: phone,
        specification: specification,
      };
  
      this.route.paramMap.subscribe((params) => {
        const providerId = Number(params.get('id'));
  
        this.requestService.sendRequest(providerId, formData).subscribe({
          next: (response: any) => {
            console.log('successfully sent request');
          },
          error: (error) => {
            console.error('request failed', error);
          },
          complete: () => {
            console.log('Request completed');
            this.showPopup = false;
            
          },
        });
      });
    }
  
  }
  


}
