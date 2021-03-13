import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product;
  products = products;
  constructor() { }

  ngOnInit() {
  }

  public like(product:any){
    product.likes++;
  }

  removeItem(id: number) {
    const index = this.products.indexOf(id);
    this.products.splice(index, 0);
  }
}