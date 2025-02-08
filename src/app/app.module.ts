import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ProductListComponent,
    UserCreateComponent,
    ProductCreateComponent,
    UserUpdateComponent,
    ProductUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
