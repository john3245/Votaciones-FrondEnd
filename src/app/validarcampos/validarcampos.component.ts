import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

//notificación
//notificacion



@Component({
  selector: 'app-validarcampos',
  templateUrl: './validarcampos.component.html',
  styleUrls: ['./validarcampos.component.css']
})
export class ValidarcamposComponent implements OnInit {

  constructor(public dialogo: MatDialogRef< ValidarcamposComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string) { }

  ngOnInit(): void {
  }
  cerrarDialogo(): void {
    this.dialogo.close(false);
  }
  confirmado(): void {
    this.dialogo.close(true);
  }

}
