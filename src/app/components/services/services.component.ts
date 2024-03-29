import { Component, OnInit } from '@angular/core';
import { ServiceByCatService } from 'src/app/services/service-by-cat.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  constructor(private router: Router, private services: ServiceByCatService, private route: ActivatedRoute) {}

  public serviceProvider: any[] = [];
  categoryName: any

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const category_id = Number(params.get('id'));

      this.services.getServices(category_id).subscribe({
        next: (response: any) => {
          this.serviceProvider = response;
          this.categoryName = this.serviceProvider[0]?.categoryName;
        },
        error: (error: any) => {
          console.error('Error:', error);
        },
        complete: () => {
          console.log('Request completed');
        }
      });
    });
  }

    public navigateToProvider(providerId:number){
      this.router.navigate(['details', providerId]);
    }
}