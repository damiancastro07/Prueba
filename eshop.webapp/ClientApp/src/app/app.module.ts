import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ProductoComponent } from './fetch-data/fetch-data.component';
import { NewProductoComponent } from './new-producto/new-producto.component';
import { EditProductoComponent } from './edit-producto/edit-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ProductoComponent,
    NewProductoComponent,
    EditProductoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductoComponent, pathMatch: 'full' },
      { path: 'createProducto', component: NewProductoComponent, pathMatch: 'full' },
      { path: 'editarProducto', component: EditProductoComponent, pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
