import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello!';
  }

  getListaProductos() {
    return [
      {
        nombre: "Teclado",
        cantidad: 200,
        precio: 40,
      },
      {
        nombre: "Monitor",
        cantidad: 30,
        precio: 350,
      },

      {
        nombre: "Monitor",
        cantidad: 30,
        precio: 350,
      },
      { nombre: "mouse", cantidad: 5, precio: 10 }
    ]
  }

  getListaAlumnos() {
    return [
      {
        nombre: "Jeremy",
        apellido: "Pacho",
        curso: "8vo",
        paralelo: "A",
        asistencia: "Presente",
      },
      {
        nombre: "Alexander",
        apellido: "Loyo",
        curso: "9no",
        paralelo: "B",
        asistencia: "No Presente",
      },

      {
        nombre: "Alberto",
        apellido: "Del Rio",
        curso: "7mo",
        paralelo: "B",
        asistencia: "Presente",
      },

      {
        nombre: "Juan",
        apellido: "Montoya",
        curso: "3ero de Bachillerato",
        paralelo: "C",
        asistencia: "No Presente",
      },

      { nombre: "Ariel", apellido: "Proaño", curso: "1er Bachillerato", paralelo: "A", asistencia: "No Presente" }
    ]
  }
}
