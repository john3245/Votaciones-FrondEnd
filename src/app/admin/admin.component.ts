import { Component, OnInit } from '@angular/core';
import { VotacionesService, Contrasena } from '../votaciones.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  element : Contrasena[]=[];
  elements:Contrasena={

    contrasena:''

    
  }

  contrasena:string;
  labelcontra:boolean;
  panel:boolean;

  constructor() { }

  ngOnInit(): void {
    this.labelcontra=false;
    this.panel=false;
  }

  //funcion para activar el label de contraseña
  activar()
  {
    this.labelcontra=true;
  }
///Función para ingresar la contraseña y activar las opciones de admin
  seguridad()
  {
if(this.elements.contrasena=='nVi@A9y')
{
  this.panel=true;
  this.labelcontra=false;
}
  }

}
