import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { LocalstorageService } from 'src/app/localstorage.service';
import { ApiService } from 'src/app/services/api.service';
import { MatTableModule } from '@angular/material/table';
import { Squadra } from 'src/app/squadra';



const SerieDiClassifica = "classifica"

@Component({
  selector: 'app-classifica',
  templateUrl: './classifica.component.html',
  styleUrls: ['./classifica.component.css']
})
export class ClassificaComponent {
 //classifica: { nome: string, punteggio: number }[] = []
  classifica:any
  // [{punteggio:300000},{punteggio:50}]
  indiceUtente: number = -1;
  
  squadre: Squadra[]=[];
  ricerca: string = "";
  //a_data: number;
  //da_data: number
  //form: FormGroup;

  constructor(
  //private dialog: MatDialogRef<ClassificaComponent>,
  //public punteggiovittoria:MatDialogRef<ClassificaComponent>,
     
    private fb: FormBuilder,
    private api:ApiService,
    private storage:LocalstorageService ) {
    console.log("dato")
      this.getDati()
    var temp = localStorage.getItem(SerieDiClassifica)
    if(temp != null){
      this.classifica = JSON.parse(temp) // "{"nome":"mario"}" -> {nome:'mario'} // la prima è una stringa la seconda è un oggetto
    }
     this.classifica=[
      //  {nome:'tizio', punteggiovittoria:50},
      //  {nome:'tizia', punteggiovittoria:20},
      //  {nome:'tiziano', punteggiovittoria:10},
    ]
    

   

}

getDati(){
  this.classifica= this.api.getfakerisultati()
  this.squadre= this.classifica.competitors
  console.log("squadre", this.squadre)
  console.log("classifica")
  // this.api.getRisultati("name", "idsport").subscribe((res) => {

  //   //console.log(res)
  //   this.classifica.countries = this.classifica.slice()
  //   this.classifica.sportID = this.classifica.slice()
  //   this.classifica.name = this.classifica.slice()
  //   this.classifica.score = this.classifica.slice()


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
