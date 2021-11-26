import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-planos-detalhes',
  templateUrl: './planos-detalhes.component.html',
  styleUrls: ['./planos-detalhes.component.scss']
})
export class PlanosDetalhesComponent implements OnInit {

  background: ThemePalette = undefined;

  constructor() { }

  ngOnInit(): void {
    this.background = this.background ? undefined : 'accent';
  }

}
