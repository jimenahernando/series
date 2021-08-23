import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { DetalleSeriesComponent } from './components/detalle-series/detalle-series.component';
import { ListaSeriesComponent } from './components/lista-series/lista-series.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltrosComponent,
    DetalleSeriesComponent,
    ListaSeriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
