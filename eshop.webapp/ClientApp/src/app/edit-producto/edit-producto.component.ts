import { Component, OnInit, Inject, Input } from '@angular/core';
import { Producto } from './../fetch-data/Producto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Route } from '@angular/router/src/config';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent implements OnInit {

  http: HttpClient;
  baseUrl: string;
  route: ActivatedRoute;
  router: Router;
  id: number;
  producto = new Producto();
  submitted = false;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, route: ActivatedRoute, router :Router) {
    this.route = route;
    this.http = http;
    this.baseUrl = baseUrl;
    this.router = router;
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    this.http.get<Producto>(this.baseUrl + 'api/Productos/' + this.id).subscribe(result => {
      this.producto = result;
    }, error => console.error(error));
  }

  UpdateProduct() {
    this.http.put<Producto>(this.baseUrl + 'api/Productos/' + this.id, this.producto, this.httpOptions).subscribe(result => {
      this.submitted = true;
    }, error => console.error(error));
  }

  Limpiar() {
    this.submitted = false;
    this.router.navigate(['/']);
  }

}
