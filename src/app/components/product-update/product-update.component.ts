import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { product } from '../../models/product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent implements OnInit {
  productForm!: FormGroup;
  MsgError: any;
  id!: number;
  product!: product;

  constructor(private formBuilder: FormBuilder, private router: ActivatedRoute, 
              private route: Router, private _productService: ProductService) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe(param => {
      this.id = +this.router.snapshot.params['id'];
      this._productService.getProductById(this.id).subscribe(res => {
        this.product = res as product;
        this.productForm = this.formBuilder.group({
          id: [this.id, [Validators.required]],
          name: [this.product.name, [Validators.required]]
        });
      }, error => {
        console.log(error);
      });
    });
  }

  UpdateProduct() {
    let con = new FormData();
    con.append("Id", this.productForm.value.id);
    con.append("Name", this.productForm.value.name);
    this.productForm.markAllAsTouched();
    this._productService.updateProduct(con).subscribe(success => {
      this.route.navigate(['/ProductList']);
    }, error => {
      this.MsgError = error.error;
      console.log(error);
    });
  }
}
