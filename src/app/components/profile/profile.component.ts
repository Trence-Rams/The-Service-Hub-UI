import { Component,OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { CompanyregistrationService } from 'src/app/services/companyregistration.service';
import { RequestService } from 'src/app/services/request.service';
import {  ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{


  constructor(private router: Router,private route:ActivatedRoute, private requestService: RequestService, private companyRegistration:CompanyregistrationService, private userService: UserServiceService){}
 
  
  serviceRequests : any = [];
  numOfRequests:number = 0;

  toggleMessage(request: any) {
    request.showMessage = !request.showMessage;
  }
  
  showPopup: boolean = false;

  openPopup() {
    this.showPopup = true;
  }

  openchatHub(){
    window.open('http://localhost:8081', '_blank');
  }

  hideRegister(){
    this.showPopup = false;
  }

  user: any;

  ngOnInit(): void {

    this.user = this.userService.getUserData();
    this.numOfRequests = this.user.numOfRequests;
    this.serviceRequests = this.user.requests;
        
  }

  name: string ="";
  phone: string ="";
  email: string = "";
  address: string = "";
  categoryName: string ="";
  description: string = "";
  imageUrl: string = "" ;
  imageUrlCat: string = "";
 
  submitForm(
  

    name: string ,
    phone: string ,
    email: string ,
    address: string ,
    categoryName: string ,
    description: string ,
    imageUrl: string ,
    imageUrlCat: string ,
  ) {
    // Define an array of required fields
    const requiredFields = [name, phone, email, address, categoryName, description];
  
    // Check if any of the required fields are blank
    if (requiredFields.some((field) => !field || field.trim() === '') || imageUrl =="No file selected") {
      // At least one required field is blank; show an alert to the user
      alert('Please fill in all required fields and the image');
    } else {
      // All required fields are filled; proceed with form submission
      const formData = {
        userName: this.user.userName,
        name: name,
        phone: phone,
        email: email,
        address: address,
        categoryName: categoryName,
        description: description,
        imageUrl: imageUrl,
        imageUrlCat: imageUrlCat
      };
  
      this.companyRegistration.registerCompany(formData).subscribe({
        next: (response: any) => {
          console.log('successfully registered service');
          this.showPopup = false;
        },
        error: (error) => {
          console.error('registration failed', error);
        },
        complete: () => {
         
          alert("successfully registered service")
        },
      });
    }
  
    
   
  }
  
  selectedImage: File | null = null;
  selectedImagePath: string = 'No file selected'; // Default text

  handleImageUpload(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selectedImage = files[0];
      this.selectedImage = selectedImage;
      this.selectedImagePath = selectedImage.name;
    } else {
      this.selectedImage = null;
      this.selectedImagePath = 'No file selected';
    }
  }


  selectedImageCategory: File | null = null;
  selectedImagePathCategory: string = 'No file selected'; // Default text

  handleImageUploadCategory(eventCategory: any) {
    const filesCategory = eventCategory.target.files;
    if (filesCategory && filesCategory.length > 0) {
      const selectedImageCategory = filesCategory[0];
      this.selectedImageCategory = selectedImageCategory;
      this.selectedImagePathCategory = selectedImageCategory.name;
    } else {
      this.selectedImageCategory = null;
      this.selectedImagePathCategory = 'No file selected';
    }
  }
 
  }

 
