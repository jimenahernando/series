import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-lista-temporadas',
  templateUrl: './lista-temporadas.component.html',
  styleUrls: ['./lista-temporadas.component.css']
})
export class ListaTemporadasComponent implements OnInit {

  arrTemporadas: any[] = [];
  
  constructor( 
    private seriesServices: SeriesService,
    private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.parent?.params.subscribe(params => {
      const idSerie = parseInt(params.serieId);
      this.arrTemporadas = this.seriesServices.getTemporadasBySerie(idSerie);
    })
  }


}
