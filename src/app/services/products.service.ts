import { Injectable } from '@angular/core';
import{HttpClient} from'@angular/common/http';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url:string="https://www.jsonkeeper.com/b/BXOV"

  constructor(private http: HttpClient) { }
  getProducts(){
    return this.http.get<IProduct[]>(this.url)

  }
  getProduct(id:number){
    return this.http.get<IProduct>(`${this.url}/${id}`)
  }
}
