import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {
  products = products;
  constructor() {}
  
  ngOnInit() {
  }

}