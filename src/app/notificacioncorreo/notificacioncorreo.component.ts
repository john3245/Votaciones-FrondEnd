import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-notificacioncorreo',
  templateUrl: './notificacioncorreo.component.html',
  styleUrls: ['./notificacioncorreo.component.css']
})
export class NotificacioncorreoComponent implements OnInit {

  constructor(public dialogo: MatDialogRef< NotificacioncorreoComponent>,
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
