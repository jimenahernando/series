import { Injectable } from '@angular/core';
import { SERIES } from '../db/series.db';
import { Serie } from '../interfaces/serie.interface';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor() { }

  getAll(){
    return SERIES;
  }

  getSerieById(idSerie: number){
    return SERIES.find(serie => serie.id === idSerie);
  }

  getTemporadasBySerie(idSerie: number) : any[]{
    let temporadas = new Array();
    SERIES.forEach(serie => {
      if(serie.id === idSerie){
        temporadas = serie.temporadas;
      }
    })
    return temporadas;
  }

  getByTitle(pTitulo: string) : Serie[] {
    // para que empiece por una letra
    // return SERIES.filter(serie => serie.titulo.toLowerCase().startsWith(pSearch.toLowerCase()))
    return SERIES.filter(serie => serie.titulo.includes(pTitulo));
  }
  
  getByRating(pRating: number) : Serie[] {
    return SERIES.filter(serie => serie.rating >= pRating);
  }

  getCanales() : Array<string> {
    const canales = SERIES.map(serie => serie.canal);
    // te trae los canales duplicados
    // return canales;

    //elimina los duplicados
    return [...new Set(canales)];
  }

  getByCanal(pCanal: string) : Serie[]{
      return SERIES.filter(serie => serie.canal === pCanal);
  }
}
