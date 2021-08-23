import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { DetalleSeriesComponent } from './components/detalle-series/detalle-series.component';
import { ListaSeriesComponent } from './components/lista-series/lista-series.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { FormsModule } from '@angular/forms';
import { ListaPersonajesComponent } from './components/detalle-series/lista-personajes/lista-personajes.component';
import { ListaTemporadasComponent } from './components/detalle-series/lista-temporadas/lista-temporadas.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltrosComponent,
    DetalleSeriesComponent,
    ListaSeriesComponent,
    ThumbnailComponent,
    ListaPersonajesComponent,
    ListaTemporadasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
