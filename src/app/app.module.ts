import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import {RouterModule,Routes} from '@angular/router'



import { AppRoutingModule } from './app-routing.module';

//componentes
import { LoginComponent } from './login/login.component';
import { RecuperarcontrasenaComponent } from './recuperarcontrasena/recuperarcontrasena.component';
import { RegistrarComponent } from './registrar/registrar.component';


const routes :Routes=[

 
  {path : 'login',component: LoginComponent},
  {path : 'recuperar',component: RecuperarcontrasenaComponent},
  {path : 'registrar',component: RegistrarComponent}
  

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecuperarcontrasenaComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
