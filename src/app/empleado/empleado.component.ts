import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
    selector: 'empleado',
    templateUrl: './empleado.component.html'
})
export class EmpleadoComponent{
    public titulo = 'Componente Empleados';
    public empleado: Empleado;
    public trabajadores:Array<Empleado>;

    public trabajadorExterno: boolean;
    public color: string;
    public colorSeleccionado: string;

    constructor(){
        this.empleado = new Empleado('Luciano Lamonica', 27, 'Informatico', false)
        this.trabajadores=[
            new Empleado('Leonardo Gonzalez', 21, 'Comerciante', true),
            new Empleado('Vanesa Lamonica', 26, 'Contadora', true),
            new Empleado('Ezequiel Villarreal', 28, 'Arquitecto', false)
        ]
        this.trabajadorExterno = false;
        this.color = 'green';
        this.colorSeleccionado = '#ccc'
    }

    ngOnInit(){
       
    }

    cambiarExterno(valor){
        this.trabajadorExterno = valor;
    }
}