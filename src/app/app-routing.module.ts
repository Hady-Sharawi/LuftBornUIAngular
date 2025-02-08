import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';


const routes: Routes = [
  // { path: '**', redirectTo: '', pathMatch: 'full' }, // Catch-all route
 
  {
    path: '', component: UserCreateComponent, data: {
      title: "User Create",
    }
  },
  {
    path: "User/Update/:id",
    component: UserUpdateComponent,
    data: {
      title: "Edit User",
    },
  },
  { path: 'ProductCreate', component: ProductCreateComponent },
  { path: 'ProductList', component: ProductListComponent },
  { path: 'Product/Update/:id', component: ProductUpdateComponent },
  {
    path: 'UserList', component: UserListComponent, data: {
      title: "User List",
    },
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule 
{}
 