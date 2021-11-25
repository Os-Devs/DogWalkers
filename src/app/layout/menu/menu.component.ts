import { Component, OnInit } from '@angular/core';
import {PrestadorServico} from "../../../shared/model/prestadorServico";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let p1 = new PrestadorServico("Brabo","154.478.659-89", new Date(2001, 8-1, 15), "15:00", "999999999", "1234", "Praia de Iracema", "Cuia", "58077-266", 174);

    console.log(p1.toString());
  }

}
