import { Component, OnInit,Inject } from '@angular/core';
import { NotificacioncorreoComponent } from '../notificacioncorreo/notificacioncorreo.component';
import { MatDialog } from "@angular/material/dialog";
import {Router} from '@angular/router';

@Component({
  selector: 'app-recuperarcontrasena',
  templateUrl: './recuperarcontrasena.component.html',
  styleUrls: ['./recuperarcontrasena.component.css']
})
export class RecuperarcontrasenaComponent implements OnInit {

  constructor(public dialogo: MatDialog,private router:Router) { }

  ngOnInit(): void {
  }

  enviar()
  {
    console.log("se envio el correo")
  }
  mostrarDialogo(): void {
    this.dialogo
      .open(NotificacioncorreoComponent, {
        data: `¡El correo se ha enviado con éxito!`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          //alert("¡A mí también!");
          this.enviar();
          this.router.navigate(['login']);
          
        } else {
          //alert("Error:)");
        }
      });
  }

  

}
