import { Component, Inject } from '@angular/core';
import { Producto } from './Producto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class ProductoComponent {
  public productos: Producto[];
  http: HttpClient;
  baseUrl: string;
  router: Router;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, router: Router) {
    this.http = http;
    this.baseUrl = baseUrl;
    this.GetProductos();
    this.router = router;
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  GetProductos() {
    this.http.get<Producto[]>(this.baseUrl + 'api/Productos').subscribe(result => {
      this.productos = result;
      console.log(this.productos)
    }, error => console.error(error));
  }
  Delete(id: number) {
    this.http.delete(this.baseUrl + 'api/Productos/'+id).subscribe(result => {
      console.log(result);
      this.GetProductos();
    }, error => console.error(error));

  }

  Editar(id: number) {
    this.router.navigate(['/editarProducto'], { queryParams: { id: id } });
  }
}

