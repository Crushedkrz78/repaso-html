import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {
  public title: string;

  constructor() {
    this.title = "Página de pruebas";
  }

  ngOnInit(): void {
  }

}
