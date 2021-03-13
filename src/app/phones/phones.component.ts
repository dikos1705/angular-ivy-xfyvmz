import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {
  products = products;
  constructor() { }

  ngOnInit() {
  }

}