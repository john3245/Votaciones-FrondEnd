import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-finalistas70',
  templateUrl: './finalistas70.component.html',
  styleUrls: ['./finalistas70.component.css']
})
export class Finalistas70Component implements OnInit {
  
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
