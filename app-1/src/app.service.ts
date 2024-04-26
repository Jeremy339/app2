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
        cedula: "1755645148",
        nombre: "Jeremy",
        apellido: "Pacho",
        curso: "8vo",
        paralelo: "A",
        direccion: "El Condado",
        asistencia: "Presente",
        telefono: "0962024086",
        correo: "jer@gmail.com",
      },
      {
        cedula:"1755645478",
        nombre: "Alexander",
        apellido: "Loyo",
        curso: "9no",
        paralelo: "B",
        direccion: "Colinas del Norte",
        asistencia: "No Presente",
        telefono: "0996655478",
        correo: "alej@gmail.com",
      },

      {
        cedula: "1718077045",
        nombre: "Alberto",
        apellido: "Del Rio",
        curso: "7mo",
        paralelo: "B",
        direccion: "La Planada",
        asistencia: "Presente",
        telefono: "0987445620",
        correo: "AlbRi@gmail.com",
      },

      {
        cedula: "1718045745",
        nombre: "Juan",
        apellido: "Montoya",
        curso: "3ero de Bachillerato",
        paralelo: "C",
        direccion: "Pisulí",
        asistencia: "No Presente",
        telefono: "0984576542",
        correo: "JuMon@gmail.com",
      },

      {
        cedula: "1766548492",
        nombre: "Justin",
        apellido: "Andres",
        curso: "2do de Bachillerato",
        paralelo: "D",
        direccion: "La Roldós",
        asistencia: "Presente",
        telefono: "0984557890",
        correo: "JustoAn@gmail.com",
      },

      { cedula: "1564511489", nombre: "Ariel", apellido: "Proaño", curso: "1er Bachillerato", paralelo: "A", direccion: "Pisulí", asistencia: "No Presente", telefono: "0984665215", correo: "arypro@gmail.com", }
    ]
  }
}
