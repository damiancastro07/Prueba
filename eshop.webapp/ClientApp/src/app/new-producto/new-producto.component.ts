import { Component, OnInit, Inject } from '@angular/core';
import { Producto } from './../fetch-data/Producto';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-new-producto',
  templateUrl: './new-producto.component.html',
  styleUrls: ['./new-producto.component.css']
})
export class NewProductoComponent implements OnInit {

  http: HttpClient;
  baseUrl: string;
  accion = "Crear Producto"

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl;
  }

  model = new Producto();

  ngOnInit() {
  }
  submitted = false;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  onSubmit() {
    
    this.http.post<Producto>(this.baseUrl + 'api/Productos', this.model, this.httpOptions).subscribe(result => {
      console.log(result)
      this.submitted = true;
    }, error => console.error(error));
  }

  Limpiar() {
    this.submitted = false;
    this.model = new Producto();
  }
}
