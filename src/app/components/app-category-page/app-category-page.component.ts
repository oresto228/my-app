import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { IProduct } from 'src/app/models/product';

@Component({
  selector: 'app-app-electronics-page',
  templateUrl: './app-category-page.component.html',
  styleUrls: ['./app-category-page.component.scss']
})
export class AppCategoryPageComponent {
  products:IProduct[];
  private subscription: Subscription;
  categories: string[] =["men's-clothing", "women's-clothing","electronics","jewelry"];
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.categories = route.snapshot.params['category'];
     
    });
    }
  }


