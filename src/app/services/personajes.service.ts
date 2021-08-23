import { Injectable } from '@angular/core';
import { PERSONAJES } from '../db/personaje.db';
import { Personaje } from '../interfaces/personaje.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor() { }

  getPersonajesBySerie(id: number) : Personaje[]{
    return PERSONAJES.filter( personaje => personaje.serie === id );
  }
}
