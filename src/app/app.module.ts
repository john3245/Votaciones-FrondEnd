import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import {RouterModule,Routes} from '@angular/router'
//notificacion 

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

//graficos
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';

//componentes
import { LoginComponent } from './login/login.component';
import { RecuperarcontrasenaComponent } from './recuperarcontrasena/recuperarcontrasena.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { AdminComponent } from './admin/admin.component';
import { MatrimoniosnominadosComponent } from './matrimoniosnominados/matrimoniosnominados.component';
import { SacerdotenomidadosComponent } from './sacerdotenomidados/sacerdotenomidados.component';
import { UserComponent } from './user/user.component';
import { Finalistas70Component } from './finalistas70/finalistas70.component';
import { Finalistas50Component } from './finalistas50/finalistas50.component';
import { GanadormatrimonioComponent } from './ganadormatrimonio/ganadormatrimonio.component';
import { GanadorsacerdoteComponent } from './ganadorsacerdote/ganadorsacerdote.component';
import { Finalistassacerdote70Component } from './finalistassacerdote70/finalistassacerdote70.component';
import { Finalistassacerdote50Component } from './finalistassacerdote50/finalistassacerdote50.component';
import { ValidarcamposComponent } from './validarcampos/validarcampos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificacioncorreoComponent } from './notificacioncorreo/notificacioncorreo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Ganadormatrimonio50Component } from './ganadormatrimonio50/ganadormatrimonio50.component';
import { Ganadorsacerdote50Component } from './ganadorsacerdote50/ganadorsacerdote50.component';


const routes :Routes=[

 
  {path : 'login',component: LoginComponent},
  {path : 'recuperar',component: RecuperarcontrasenaComponent},
  {path : 'registrar',component: RegistrarComponent},
  {path : 'home',component: InicioComponent},
  {path : 'matrimoniosnominados',component: MatrimoniosnominadosComponent},
  {path : 'sacerdotenominados',component: SacerdotenomidadosComponent},
  {path : 'user',component: UserComponent},
  {path : '70',component: Finalistas70Component},
  {path : '50',component: Finalistas50Component},
  {path : '70sacerdote',component: Finalistassacerdote70Component},
  {path : '50sacerdote',component: Finalistassacerdote50Component},
  {path : 'ganadormatrimonio',component: GanadormatrimonioComponent},
  {path : 'ganadorsacerdote',component: GanadorsacerdoteComponent},
  {path : 'ganadormatrimonio50',component: Ganadormatrimonio50Component},
  {path : 'ganadorsacerdote50',component: Ganadorsacerdote50Component},
  {path : '**',component: NotFoundComponent}
  
  

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecuperarcontrasenaComponent,
    RegistrarComponent,
    InicioComponent,
    AdminComponent,
    MatrimoniosnominadosComponent,
    SacerdotenomidadosComponent,
    UserComponent,
    Finalistas70Component,
    Finalistas50Component,
    GanadormatrimonioComponent,
    GanadorsacerdoteComponent,
    Finalistassacerdote70Component,
    Finalistassacerdote50Component,
    ValidarcamposComponent,
    NotificacioncorreoComponent,
    NotFoundComponent,
    Ganadormatrimonio50Component,
    Ganadorsacerdote50Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    MatDialogModule, // <--- Aquí
    BrowserAnimationsModule, // <--- Aquí
    MatButtonModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ValidarcamposComponent// <--- Aquí
  ]
})
export class AppModule { }
