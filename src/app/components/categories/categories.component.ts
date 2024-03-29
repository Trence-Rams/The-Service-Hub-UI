import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategorySchema } from './categorySchema';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

 public categories?: CategorySchema[];



  constructor(private categoryService: CategoryService, private router: Router){}
  
  ngOnInit(): void {
    this.getCategories();
  }
  
  public getCategories(): void {
    this.categoryService.getCategories().subscribe(
      (response: CategorySchema[]) =>{
        this.categories = response;
      }),
      (error: HttpErrorResponse) =>{
        alert(error.message);
      };
  }     
  
  public navigateToServices(category_id: Number){
    this.router.navigate(['services', category_id]);
  }
}
