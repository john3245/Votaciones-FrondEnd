import { Component, OnInit } from '@angular/core';
import { VotacionesService, Contrasena } from '../votaciones.service';
//notificación
import { MatDialog } from "@angular/material/dialog";
import { ValidarcamposComponent } from '../validarcampos/validarcampos.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  element : Contrasena[]=[];
  elements:Contrasena={

    contrasena:''

    
  }

  contrasena:string;
  labelcontra:boolean;
  panel:boolean;

  constructor(public dialogo: MatDialog) { }

  ngOnInit(): void {
    this.labelcontra=true;
    this.panel=false;
  }

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

  mostrarDialogo(): void {
    this.dialogo
      .open(ValidarcamposComponent, {
        data: `¿Estas seguro de eliminar el usuario?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          //alert("¡A mí también!");
          this.eliminar();
          
        } else {
          //alert("Error:)");
        }
      });
  }


  eliminar()
  {
    //llamar función para eliminar a los usuarios
  }

}
