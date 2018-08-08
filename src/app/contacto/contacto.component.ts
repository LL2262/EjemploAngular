import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'conctatcto',
    templateUrl: './contacto.component.html'
})

export class ContatctoComponent{

    public titulo = 'Pagina de contacto de la web';
    public parametro;

    constructor(private _route: ActivatedRoute, private _router: Router){
        
    }

    ngOnInit(){
        this._route.params.forEach((params: Params) => {this.parametro = params['page'];});
    }

    redirigir(){
        this._router.navigate(['/contacto', 'lucianolamonica']);
    }

    redirigirHome(){
        this._router.navigate(['/pagina-principal']);
    }

    redirigirEmpleado(){
        this._router.navigate(['/empleado']);
    }
}