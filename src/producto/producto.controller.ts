import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('producto')
export class ProductoController {

    @Get()
    funListar(){
      return["Teclado", "Monitor", "Ratón"]
    }
    @Post()
    funGuardar(@Body()prod){
      return prod
    }

    @Get(':id')
    funMostrar(@Param('id')id){
        return "Mostrando...." +id;
    }
    
    @Put(':id')
    funModificar(@Param('id')id,@Body()prod){
        return "Modificando" +id;
    }

    @Delete(':id')
    funEliminar(@Param('id')id){
        return "Eliminando" +id;  
    }
}


