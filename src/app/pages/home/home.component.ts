import { Product } from './../../models/product';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _product:Product;
  constructor(private productServ:ProductsService) { 
  //  this._product = new Product({ name: 'test', });
  
  }

  ngOnInit() {
    $('body').addClass('test');
  }

  getproduct() {
    this.productServ.Get().subscribe(value => {
      this._product = value;
    });    
  }
}
