import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-television',
  templateUrl: './television.component.html',
  styleUrls: ['./television.component.css']
})
export class TelevisionComponent implements OnInit {
  products = products;
  constructor() { }

  ngOnInit() {
  }

}