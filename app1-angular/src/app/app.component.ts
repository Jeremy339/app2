import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { response } from 'express';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app1-angular'
  titulo: string = "Lista Productos desde Angular";
  productos: any[] = []
  constructor() {
    this.listarProductos()
  }
  listarProductos() {
    fetch('http://127.0.0.1:3000/producto')
      .then(response => response.json())
      .then(json => {
        this.productos = json
      })
  }

}





