import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})
export class FrutaComponent{
    public nombre_componente = 'Componente de Fruta';
    public listado_fruta = 'Naranja, Pera, Manzana, Sandia';

    public nombre: string;
    public edad: number;
    public mayorDeEdad: boolean;
    public trabajos: Array<any> = ['Carpintero', 44,'Informatico'];
    comodin: any;

    constructor(){
        this.nombre = 'Luciano';
        this.edad = 27;
        this.mayorDeEdad = false;
        this.comodin = "SI";
    }

    ngOnInit(){
        this.cambiarNombre();
        this.cambiarEdad(30);

        // Variables y Alcances
        var uno = 8;
        var dos = 15;

        if(uno == 8){

            console.log("Dentro del if")
        }
    }

    cambiarNombre(){
        this.nombre = 'Eduardo';
    }

    cambiarEdad(edad){
        this.edad = edad;
    }

}