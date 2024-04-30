import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductoService {
    private productos: any[]=[];
    findAll():any[]{
        return this.productos
    }
create(prod:any){
    this.productos.push(prod)
    return prod
}
}
