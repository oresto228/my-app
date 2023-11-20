import { Component} from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
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
