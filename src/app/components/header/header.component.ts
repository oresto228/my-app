import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  products:IProduct[];
  productsSubscription:Subscription;
constructor(private ProductsService:ProductsService){

}
ngOnInit():void{
  this.productsSubscription= this.ProductsService.getProducts().subscribe((data)=> {
    this.products=data;
  })
}
ngOnDestroy(){
  if( this.productsSubscription) this.productsSubscription.unsubscribe();
}
  


}
