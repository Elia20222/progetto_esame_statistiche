import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServizioatletiService } from 'src/app/servizioatleti.service';
import { ApiService } from 'src/app/services/api.service';
import { DatiAtleti } from 'src/app/dati-atleti';
import { Validators } from '@angular/forms';
import { Dialog } from '@angular/cdk/dialog';
import { PopPupInfoGiocatoriComponent } from '../pop-pup-info-giocatori/pop-pup-info-giocatori.component';


@Component({
  selector: 'app-popupatleti',
  templateUrl: './popupatleti.component.html',
  styleUrls: ['./popupatleti.component.css']
})

export class POPUPatletiComponent {
  DatiAtleti: DatiAtleti [] = [];
  atletadellasquadra: DatiAtleti[] = [];
  @Output() NuovoDatoAtleta: EventEmitter<any> = new EventEmitter;
  displayedColumns: string[] = ['name', 'btn'];
  datoatleta: DatiAtleti [] = []
  constructor(
    public Dialog: Dialog,
    public Servizioatleti: ServizioatletiService,
    public dialog: MatDialog,
    public MatDialogRef:MatDialogModule,
    @Inject(MAT_DIALOG_DATA) public data: any,
    // @Input() datoatleta: ServizioatletiService,
    private dialogRef: MatDialogRef<POPUPatletiComponent>,
    

    // @Input() Atleti: ServizioatletiService,
    // @Output() Atletaemesso: EventEmitter<any> = new EventEmitter(),
    // Data:any, 
    
    private api:ApiService
    
    ){

      // this.api.Atleti = this.MatDialogRef.athletes
      // this.Atletaemesso = this.chiudi
      // this.DatiAtleti = this.DatiAtleti.athletes,
      // this.Servizioatleti.athletes = this.DatiAtleti.Servizioatleti,
      // this.DatiAtleti.name.athletes = this.DatiAtleti.DatiAtleti,
      this.DatiAtleti = this.Servizioatleti.athletes
      this.api = this.Servizioatleti.athletes
      
      //this.DatiAtleti = this.athletes: ['sportType', Validators.required], 
        
      
    }
  
    // getgiocatori(element:any){

    //   const datoatleta = this.Servizioatleti.Athletes;
      
      
  //   //   for (let i = 0; i < datoatleta.length; i++) {
  //   //   const element = datoatleta[i];
  //   //   element.image,
  //   //   element.age,
  //   //   element.birthdate,
  //   //   element.gender,
  //   //   element.positions

  //     // datoatleta = this.Servizioatleti.getcountrie((res:any)=>{
  //     // this.Servizioatleti.Athletes
  //     // })

  //     this.DatiAtleti = this.Servizioatleti.athletes
      
      
  //     // this.api.getAtleti(this.data.id).subscribe((res:any)=>{
  //     //   this.Servizioatleti.Athletes = res
        
  //     //   // this.Servizioatleti.aprimodal(res)
  //     //   //this.Servizioatleti.Athletes.id
  //     // })
      
  //   }
  // }

  getinfo(Giocatore:any){
    this.dialog.open(PopPupInfoGiocatoriComponent, {data: Giocatore})
    
    
  }

  chiudi(){
    //chiudo la modal
    this.dialogRef.close()
  }}



