import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css',
    standalone: false
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private _productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(pageNumber: number = 1, pageSize: number = 10): void {
    this._productService.getProducts(pageNumber, pageSize).subscribe((data) => {
      this.products = data;
    });
  }

  deleteProduct(id: number): void {
    this._productService.deleteProduct(id).subscribe(() => {
      this.loadProducts();
    });
  }

  updateProduct(id: number): void {
    this.router.navigate(['Product/Update', id]);
  }
}
