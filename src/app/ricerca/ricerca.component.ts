import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css']
})
export class RicercaComponent {
  CLASSIFICASCELTA!: string;
  ricerca: any = "";
  datiSport: any [] = []; // dichiaro l'oggetto sport inizializzato da array che contirnr array
  @Output() cambioSport: EventEmitter<any> = new EventEmitter
  
  constructor(private api:ApiService) { }
  
  sportScelto(sport: string){
    this.cambioSport.emit(sport) // 
    this.ricerca = ""
    this.datiSport= []
  }
  cerca(ricerca: string){
    //this.api.getSport<any>(this.ricerca).subscribe((res)=>{
     // this.datiSport = res.results
    //})
    this.ricerca=ricerca
    console.log(ricerca)
  }

 
}

