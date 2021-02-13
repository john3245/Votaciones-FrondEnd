import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finalistassacerdote70',
  templateUrl: './finalistassacerdote70.component.html',
  styleUrls: ['./finalistassacerdote70.component.css']
})
export class Finalistassacerdote70Component implements OnInit {
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
