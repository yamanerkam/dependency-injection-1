import { Component } from '@angular/core';
import { ProductService } from './productService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private productService : ProductService){
  }
  title = 'dependency-injection-1';
  products=this.productService.getProducts();
  }

