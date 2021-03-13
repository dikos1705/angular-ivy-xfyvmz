import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.css']
})
export class ArtsComponent implements OnInit {
  products = products;
  constructor() { }

  ngOnInit() {
  }

}