import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/interfaces/serie.interface';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-lista-series',
  templateUrl: './lista-series.component.html',
  styleUrls: ['./lista-series.component.css']
})
export class ListaSeriesComponent implements OnInit {

  arrSeries: Serie[];

  constructor( private seriesServices: SeriesService) { 
    this.arrSeries = [];
  }

  ngOnInit(): void {
    this.arrSeries = this.seriesServices.getAll();
  }
  
  onFiltroRating(pRating: number){
    this.arrSeries = this.seriesServices.getByRating(pRating);
  }
  
  onFiltroCanal(pCanal: any){
    if(pCanal){
      this.arrSeries = this.seriesServices.getByCanal(pCanal);
    } else {
      this.arrSeries = this.seriesServices.getAll();
    }
  }

  onBusqueda(pTitulo: any){
    this.arrSeries = this.seriesServices.getByTitle(pTitulo);
  }

}
