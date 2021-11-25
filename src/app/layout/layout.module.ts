import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrosselComponent } from './carrossel/carrossel.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCarouselModule } from "mdb-angular-ui-kit/carousel";



@NgModule({
  declarations: [
    CarrosselComponent
  ],
  imports: [
    CommonModule,
    MdbCheckboxModule,
    MdbCarouselModule
  ],
  exports: [
    CarrosselComponent
  ]
})
export class LayoutModule { }
