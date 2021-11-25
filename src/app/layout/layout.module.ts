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
import { ComentariosComponent } from './comentarios/comentarios.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatOptionModule } from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    CarrosselComponent,
    MenuComponent,
    ComentariosComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MdbCheckboxModule,
    MdbCarouselModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    FormsModule
  ],
  exports: [
    MenuComponent,
    CarrosselComponent,
    ComentariosComponent
  ]
})
export class LayoutModule { }
