import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {
  public title: string;

  public nombre: string;
  public apellido: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router) {
    this.title = "Página de pruebas";
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params)=>{
      console.log(params);
      this.nombre = params.nombre;
      this.apellido = params.apellido;
    });
  }

  redireccion(){
    //alert("Método de redirección");
    this._router.navigate(['/pagina-de-pruebas','cristian','molinito']);
  }

}
