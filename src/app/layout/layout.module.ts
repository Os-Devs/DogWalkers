import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaComponent } from './mapa/mapa.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    MapaComponent
  ],
  exports: [
    MapaComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ]
})
export class LayoutModule { }
