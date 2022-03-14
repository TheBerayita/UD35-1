import { Component, OnInit } from '@angular/core';
import { persona } from '../app.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  persona = new persona("", "","", 0);
  constructor() { }
  n1: number = 0;
  mensaje: String = '';

  ngOnInit(): void {  }

  comprovar(){
    if(this.n1 == 5){
      this.mensaje = "Suma correcta"
    }else{
      this.mensaje = "Número incorrecto"
    }
  }
}
