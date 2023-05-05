import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { LocalstorageService } from 'src/app/localstorage.service';
import { ApiService } from 'src/app/services/api.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Squadra } from 'src/app/squadra';
import { ServizioclassificheService } from 'src/app/servizioclassifiche.service';







const SerieDiClassifica = "classifica"

@Component({
  selector: 'app-classifica',
  templateUrl: './classifica.component.html',
  styleUrls: ['./classifica.component.css']
})
export class ClassificaComponent {

  Squadra!: Squadra
  squadre: Squadra []= []
  data:any
  dataSource: any;
  competitionId: number = 103
  
  constructor(private Apiservice : ApiService, public ServizioclassificheService:ServizioclassificheService){
   this.getlistasquadre(),
   this.getlistaTipiDiSport()
  }
  getlistasquadre(){
    this.Apiservice.getRisultati(this.competitionId).subscribe(res=>{
      this.Squadra = res
      this.dataSource = new MatTableDataSource(res.competitors)
      console.log('listasquadre', this.Squadra)
    })
  }

  getlistaTipiDiSport(){

  }
  @Output() cambioSport: EventEmitter<any> = new EventEmitter
  displayedColumns: string[] = ['TOP', 'SPORTNAME', 'SQUADRE', 'ATLETI', 'NAZIONE', 'VITTORIE'];
  
    //classifica: { nome: string, punteggio: number }[] = []
    classifica:any
    // [{punteggio:300000},{punteggio:50}]
    indiceUtente: number = -1;
  
  
    ricerca: string = "";
    //a_data: number;
    //da_data: number
    //form: FormGroup;

 

getDati(){
  this.classifica= this.Apiservice.getfakerisultati()
  this.squadre= this.classifica.competitors
  console.log("squadre", this.squadre)
  console.log("classifica")
  // this.api.getRisultati("name", "idsport").subscribe((res) => {

  //   //console.log(res)
     //this.classifica.countries = this.classifica.slice()
     //this.classifica.sportID = this.classifica.slice()
     //this.classifica.name = this.classifica.slice()
     //this.classifica.score = this.classifica.slice()


  //   this.classifica = res
  //}
  //)
  
}



Submit(){
  //var da_data: Date = new Date (this.form.value.dataInizio)
  //var a_data: Date = new Date (this.form.value.dataFine)
}


esci(){
  // 
  window.location.reload()
}}
