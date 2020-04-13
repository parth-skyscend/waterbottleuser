import { Component, OnInit } from '@angular/core';
import { product_class } from '../homepage/product_class';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent implements OnInit {

  pro_arr:product_class[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
