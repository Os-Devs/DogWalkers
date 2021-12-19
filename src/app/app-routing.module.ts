import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from "./layout/cadastro/cadastro.component";
import { PrincipalComponent } from "./layout/principal/principal.component";
import {LoginComponent} from "./layout/login/login.component";
import {LoginValidacaoComponent} from "./layout/login-validacao/login-validacao.component";

const routes: Routes = [
  {
    path: "",
    component: PrincipalComponent
  },
  {
    path: "cadastros",
    component: CadastroComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "validacao",
    component: LoginValidacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
