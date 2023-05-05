import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

export const punteggisottostanti = [10,20,30,40,50,60,70,80,90,100]
@Component({
  selector: 'app-punteggiovittoria',
  templateUrl: './punteggiovittoria.component.html',
  styleUrls: ['./punteggiovittoria.component.css']
})
export class PunteggiovittoriaComponent {

  @Input()punteggiovittoria:number = 0

  punti:number[] = punteggisottostanti
  idUtente: number = -1;
  classifica: { nome: string, punteggio: number }[] = []

  risultati: any
  risultatocorrente: any
  squadra : any [] = []
  tornei: [] = []
  datatornei: number | any
  giorni: string[] = [] // date dei giorni
  competitionId: number = 103
  
  title = 'progetto_esame_statistiche';
  constructor(private api:ApiService){
    this.api.getRisultati(this.competitionId).subscribe((res)=>{
      
      
      this.risultati = res.hourly,
      this.risultatocorrente.sportID= this.risultati.sportID.slice()
      this.risultatocorrente.timezone= this.risultati.timezone.slice()
      this.risultatocorrente.timezone= this.risultati.competition.slice()
      console.log(res)
    })
    
    //this.api.getSquadre(
      //this.squadra.sportID,
      
    //).subscribe((res) => {
      //console.log(res)
      
      
    //})
  }

 

  impostaData(d:number){
    console.log('la data è' + d)
    this.datatornei = d
  }
}
