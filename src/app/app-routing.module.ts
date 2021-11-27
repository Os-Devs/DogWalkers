import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from "./layout/cadastro/cadastro.component";
import { PrincipalComponent } from "./layout/principal/principal.component";

const routes: Routes = [
  {
    path: "",
    component: PrincipalComponent
  },
  {
    path: "cadastros",
    component: CadastroComponent
  }
  // path: "",
  // component: null;
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
