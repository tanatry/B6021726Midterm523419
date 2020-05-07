import { Injectable } from '@angular/core';
import { productsModel } from '../product.model'
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cartProduct: productsModel = [];
  total: number = 0

  constructor(private productService: ProductService) { }
  
  add(id: number){
    console.log('Add product id: '+id+' to cart');
    this.cartProduct.push(this.productService.getSomeProduct(id));
    this.total = this.cartProduct.length;
  }

}
  
