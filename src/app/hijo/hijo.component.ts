import { Component } from '@angular/core';

@Component({
    selector: 'componente-hijo',
    template: `
        <hr/>
        <strong>Este es el {{titulo}}</strong>
    `
})
export class HijoComponent{
    public titulo: string;

    constructor()
    {
        this.titulo= "Componente Hijo"
    }
}