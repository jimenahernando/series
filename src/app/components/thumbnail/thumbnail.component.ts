import { Component, Input, OnInit } from '@angular/core';
import { Serie } from 'src/app/interfaces/serie.interface';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {

  @Input() serie: Serie;

  constructor() {
    this.serie = {
      id: 0,
      titulo: '',
      creador: '',
      rating: 0,
      fechas: '',
      imagen: '',
      canal: '',
      temporadas: []
    }
   }

  ngOnInit(): void {
  }

}
