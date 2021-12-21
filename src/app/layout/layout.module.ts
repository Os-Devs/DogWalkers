import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { CarrosselComponent } from './carrossel/carrossel.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCarouselModule } from "mdb-angular-ui-kit/carousel";
import { PlanosComponent } from './planos/planos.component';
import { MapaComponent } from './mapa/mapa.component';
import { AgmCoreModule } from '@agm/core';
import { PlanosDetalhesComponent } from './planos-detalhes/planos-detalhes.component';
import { MatTabsModule } from "@angular/material/tabs";
import { CadastroComponent } from './cadastro/cadastro.component';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatInputModule } from "@angular/material/input";
import { ComentariosComponent } from './comentarios/comentarios.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatOptionModule } from "@angular/material/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { PrincipalComponent } from './principal/principal.component';
import { FooterComponent } from './footer/footer.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import { LoginComponent } from './login/login.component';
import { LoginValidacaoComponent } from './login-validacao/login-validacao.component';
import { PerfilComponent } from './perfil/perfil.component';
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  declarations: [
    CarrosselComponent,
    MenuComponent,
    PlanosComponent,
    MapaComponent,
    PlanosDetalhesComponent,
    CadastroComponent,
    ComentariosComponent,
    PrincipalComponent,
    FooterComponent,
    LoginComponent,
    LoginValidacaoComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MdbCheckboxModule,
    MdbCarouselModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    MatTabsModule,
    FormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatExpansionModule,
    MatToolbarModule
  ],
  exports: [
    MenuComponent,
    CarrosselComponent,
    PlanosComponent,
    MapaComponent,
    PlanosDetalhesComponent,
    CadastroComponent,
    ComentariosComponent,
    FooterComponent,
    LoginComponent,
    LoginValidacaoComponent
  ]
})
export class LayoutModule { }
