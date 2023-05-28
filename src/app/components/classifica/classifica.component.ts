import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { LocalstorageService } from 'src/app/localstorage.service';
import { ApiService } from 'src/app/services/api.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Squadra } from 'src/app/squadra';
import { ServizioclassificheService } from 'src/app/servizioclassifiche.service';
import { DataSource } from '@angular/cdk/collections';
import { ServiziocontriesService } from 'src/app/serviziocontries.service'
import { ServizioatletiService } from 'src/app/servizioatleti.service';
import { ServiziotipidisportService } from 'src/app/serviziotipidisport.service';
import { POPUPatletiComponent } from '../popupatleti/popupatleti.component';
import { DialogRef } from '@angular/cdk/dialog';
import { DatiAtleti } from 'src/app/dati-atleti';

const SerieDiClassifica = "classifica"

@Component({
  selector: 'app-classifica',
  templateUrl: './classifica.component.html',
  styleUrls: ['./classifica.component.css']
})
export class ClassificaComponent implements OnInit{

  Squadra!: Squadra
  squadre: Squadra [] = []
  data: any
  public dataSource: any;
  competitionId: number = 103;
  langId: number [] = []
  sportType: number | undefined
  sportId: number | undefined
  countryId: number | undefined
  AthletesId: number | undefined
  public displayColumn: string []= ['TOP', 'SPORTNAME', 'SQUADRE', 'ATLETI', 'NAZIONE', 'VITTORIE']
  matDialogActions: any;

  constructor(
    private Apiservice : ApiService,
    public ServizioclassificheService:ServizioclassificheService,
    public Serviziocontries:ServiziocontriesService,
    public Servizioatleti: ServizioatletiService,
    public Serviziotipidisport: ServiziotipidisportService,
    //public MatDialogModule: MatDialogModule,
    public dialog: MatDialog,
    //public DatiAtleti:DatiAtleti
    
    )
    
    {
    this.getlistasquadre(),
    this.getlistaTipiDiSport(),
    this.getDati()
   
   
  }

  ngOnInit(): void {
  //   this.getlistasquadre();
  }
  getlistasquadre(){
      this.Apiservice.getRisultati(this.competitionId).subscribe(res=>{
      this.Squadra = res
      this.dataSource = new MatTableDataSource(res.competitors)
      this.Squadra.sportType 
      console.log('listasquadre', this.Squadra)
    })
  }

  getSquadra(){
      this.dialog.open(POPUPatletiComponent,{
      minWidth:"30px",
      data: this.Servizioatleti
    })
  }
   getnazioni(){
    // this.Apiservice.getNazione(this.langId).subscribe(res=>{
    //   this.Squadra = res
    //   this.dataSource = new MatTableDataSource(res.countries)
    //   this.Squadra.countries
    // })
   }

  
  getlistaTipiDiSport(){
    //this.Apiservice.getSport(this.sportType).subscribe(res=>{
      //this.dataSource = new MatTableDataSource(res.sportType)
      //this.Squadra = res
      //console.log('listasport', this.Squadra)
    //})
  }
  @Output() cambioSport: EventEmitter<any> = new EventEmitter
  displayedColumns: string[] = ['TOP', 'SPORTNAME', 'SQUADRE', 'ATLETI', 'NAZIONE', 'VITTORIE'];
  
    //classifica: { nome: string, punteggio: number }[] = []
    classifica:any
    // [{punteggio:100000},{punteggio:50}]
    indiceUtente: number = -1;
  
  
    ricerca: string = "";
    //a_data: number;
    //da_data: number
    //form: FormGroup;

    apriModal(id:number) {
      //data indica se apro una squadra tipo
      this.dialog.open(POPUPatletiComponent, {
        minWidth: "50%",
        data: {
          id:id,
          //Servizioatleti: ServizioatletiService
          // Atleti: ServizioatletiService,
          // Atletaemesso:EventEmitter,
        }
        
      })
    }

getDati(){
  this.classifica = this.Apiservice.getfakerisultati()
  this.squadre = this.classifica.competitors
  this.sportId = this.classifica.competitions.sportId //prende il nome dello sport dalla funzione
  this.countryId = this.classifica.countries.countryId //
  //this.DatiAtleti = this.classifica.athletes.DatiAtleti
  // this.AthletesId = this.classifica.competitions.imageVersion
  // this.AthletesId = this.classifica.athletes.AthletesId
  this.dataSource = new MatTableDataSource(this.squadre)
  console.table("classifica",this.classifica)

  
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
confermaedesci()
  {
    this.matDialogActions.close("")
  }

esci(){
  // 
  window.location.reload()
}}
