import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable,of} from 'rxjs';

export interface Contrasena

{

  contrasena:string,

  

}
@Injectable({
  providedIn: 'root'
})
export class VotacionesService {

  constructor() { }
}
