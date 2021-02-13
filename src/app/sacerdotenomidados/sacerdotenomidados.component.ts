import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sacerdotenomidados',
  templateUrl: './sacerdotenomidados.component.html',
  styleUrls: ['./sacerdotenomidados.component.css']
})
export class SacerdotenomidadosComponent implements OnInit {
  oportunidades:number;
  visible:boolean;
  terminar:boolean;
  texto:string;

  constructor() { }

  ngOnInit(): void {
    this.oportunidades=3;
    this.visible=true;
    this.terminar=false;
    this.texto='Oportunidades para votar';
  }
  votar()
  {
    if(this.oportunidades>0)
    {
      this.oportunidades=this.oportunidades-1;
      //llar función adonis
    }
   if(this.oportunidades==0)
    {
      
      
      this.visible=false;
      this.terminar=true;
      this.texto='Oportunidades para votar agotadas, favor de dar click en terminar';

      
    }
    

    
  }

}
