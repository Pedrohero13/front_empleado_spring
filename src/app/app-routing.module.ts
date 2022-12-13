import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path : "inicio",
    component: InicioComponent
  },
  {
    path : "formulario",
    component: FormularioComponent
  },
  {
    path : "login",
    component: LoginComponent
  },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
