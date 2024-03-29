import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorySchema } from '../categories/categorySchema';
import { HttpErrorResponse } from '@angular/common/http';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit{
  
  public categories?: CategorySchema[];

  constructor(private categoryService: CategoryService, private router: Router) {}
  ngOnInit(): void {
    this.getCategories();
  }

  navigateTo() {
    this.router.navigate(['/categories']);
  }


  
  public getCategories(): void {
    this.categoryService.getCategories().subscribe(
      (response: CategorySchema[]) =>{
        this.categories = response.slice(0,3);
      }),
      (error: HttpErrorResponse) =>{
        alert(error.message);
      };
  }     
    
  public navigateToServices(category_id: Number){
    this.router.navigate(['services', category_id]);
  }

}
