import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css']
})
export class RicercaComponent {
  //CLASSIFICASCELTA!: string;
  ricerca: string = "";
  datiSport: string [] = []; // dichiaro l'oggetto sport inizializzato da array che contirnr array
  @Output() cambioSport: EventEmitter<any> = new EventEmitter
  
  constructor(private api:ApiService) { }
  

  cerca(ricerca: string){
    this.ricerca=ricerca
    console.log(ricerca)
  }


  sportScelto(sport: string){
    this.cambioSport.emit(sport) // 
    this.ricerca = ""
    this.datiSport= []
  }

 
}

