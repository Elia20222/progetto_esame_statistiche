import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServizioatletiService } from 'src/app/servizioatleti.service';
import { ApiService } from 'src/app/services/api.service';
import { DatiAtleti } from 'src/app/dati-atleti';
import { Validators } from '@angular/forms';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-pop-pup-info-giocatori',
  templateUrl: './pop-pup-info-giocatori.component.html',
  styleUrls: ['./pop-pup-info-giocatori.component.css']
})
export class PopPupInfoGiocatoriComponent {
  DatiAtleti: DatiAtleti [] = []
  //atletadellasquadra: DatiAtleti[] | undefined;
  @Output() NuovoDatoAtleta: EventEmitter<any> = new EventEmitter
  
  displayedColumns: string[] = ['età','genere','data','ruolo'];
  
  constructor(
    public Dialog: Dialog,
    public Servizioatleti: ServizioatletiService,
    public dialog: MatDialog,
    public MatDialogRef:MatDialogModule,
    @Inject(MAT_DIALOG_DATA)  public data: any,
    
    
    
    private dialogRef: MatDialogRef<PopPupInfoGiocatoriComponent>,
    

    //  @Input() Atleti: ServizioatletiService,
     
    // Data:any, 
    
    private api:ApiService
    
    ){ 
console.log(data)
      
    
this.data = [data]
      // this.api.Atleti = this.MatDialogRef.athletes
      // this.Atletaemesso = this.chiudi
      // this.DatiAtleti = this.DatiAtleti.athletes,
      // this.Servizioatleti.athletes = this.DatiAtleti.Servizioatleti,
      // this.DatiAtleti.name.athletes = this.DatiAtleti.DatiAtleti,
      this.DatiAtleti = this.Servizioatleti.athletes
      this.api = this.Servizioatleti.athletes
      //this.DatiAtleti = this.athletes: ['sportType', Validators.required], 
        
      
    }
    getdatianagraficigiocatore(){
      const datoatleta = this.Servizioatleti.Athletes;
      for (let i = 0; i < datoatleta.length; i++) {
      const element = datoatleta[i];
      element.image,
      element.age,
      element.birthdate,
      element.gender,
      element.positions
      
    }
    }
  
    // getgiocatori(Athletes:ServizioatletiService){

    //   const datoatleta = this.Servizioatleti.Athletes
    // //   const Atleti = this.api.athletes +this.dialogRef.id
    // //   if(Atleti == athletes){
        
    // //     window.location.href = this.Servizioatleti.athletes
    // //   }
    // //   // else facebook, else twitter (simile a whatsapp)
    // //   else if( Atleti == null ){
    // //     window.location.href = this.Servizioatleti.athletes
    // //   }
      
    // //   //this.api.getAtleta
    //  }

  chiudi(){
    //chiudo la modal
    this.dialogRef.close()
  }
}

