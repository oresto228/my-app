import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  categories: string[] =["men's-clothing", "women's-clothing","electronics","jewelry"];
  products:IProduct[];
  productsSubscription:PushSubscription;
  isMenuOpen = false;
constructor(private ProductsService:ProductsService){
}
toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}
ngOnInit():void{
  // this.productsSubscription= this.ProductsService.getProducts().subscribe((data)=> {
  //   this.products=data;
  // })
}
ngOnDestroy(){
  if( this.productsSubscription) this.productsSubscription.unsubscribe();
}
 

}
