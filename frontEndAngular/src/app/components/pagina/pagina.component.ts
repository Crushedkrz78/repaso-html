import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {
  public title: string;

  constructor() {
    this.title = "Página de pruebas";
  }

  ngOnInit(): void {
  }

}
