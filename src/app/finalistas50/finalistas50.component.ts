import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finalistas50',
  templateUrl: './finalistas50.component.html',
  styleUrls: ['./finalistas50.component.css']
})
export class Finalistas50Component implements OnInit {
  visible:boolean;
  terminar:boolean;
  

  constructor() {
  
  
   }

  

  ngOnInit(): void {
    this.visible=true;
    this.terminar=false;
    
  }

  votar()
  {
    
   
      
      
      this.visible=false;
      this.terminar=true;
     
      
    }

}
