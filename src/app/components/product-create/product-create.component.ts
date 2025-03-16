import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
    selector: 'app-product-create',
    templateUrl: './product-create.component.html',
    styleUrl: './product-create.component.css',
    standalone: false
})
export class ProductCreateComponent {
  productForm!: FormGroup;
  MsgError: any;

  constructor(private formBuilder: FormBuilder, private router: Router, 
              private _productService: ProductService) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required]]
    });
  }

  AddProduct() {
    let con = new FormData();
    con.append("Name", this.productForm.value.name);
    this.productForm.markAllAsTouched();
    this._productService.createProduct(con).subscribe(success => {
      this.router.navigate(['/ProductList']);
    }, error => {
      this.MsgError = error.error;
      console.log(error);
    });
  }
}
