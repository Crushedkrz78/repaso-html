import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiComponente } from './components/mi-componente/mi-componente.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    PeliculasComponent,
    PruebasComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
