import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finalistassacerdote50',
  templateUrl: './finalistassacerdote50.component.html',
  styleUrls: ['./finalistassacerdote50.component.css']
})
export class Finalistassacerdote50Component implements OnInit {
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
