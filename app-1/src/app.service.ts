import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello!'; 
  }

  getListaProductos(){
    return [
      {
      nombre:"Teclado", 
      cantidad:200,
      precio: 40,
      },
      {
        nombre:"Monitor", 
        cantidad:30,
        precio: 350,
      },
      {nombre:"mouse", cantidad:5, precio:10}
    ]
  }  
}
