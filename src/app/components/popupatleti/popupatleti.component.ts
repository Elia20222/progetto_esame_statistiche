import { Component, Inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServizioatletiService } from 'src/app/servizioatleti.service';
import { ClassificaComponent } from '../classifica/classifica.component';
import { ApiService } from 'src/app/services/api.service';
import { DatiAtleti } from 'src/app/dati-atleti';

@Component({
  selector: 'app-popupatleti',
  templateUrl: './popupatleti.component.html',
  styleUrls: ['./popupatleti.component.css']
})

export class POPUPatletiComponent {

  DatiAtleti: DatiAtleti [] = []

  constructor(
    // public MatDialogModule: MatDialogModule,
    // public MatDialogRef: MatDialogModule,
    public Servizioatleti: ServizioatletiService,
    //public Classifica:ClassificaComponent,
    private dialogRef: MatDialogRef<POPUPatletiComponent>,
    @Inject(MAT_DIALOG_DATA) Data:any, 
    
    private api:ApiService
    ){
      // this.DatiAtleti = this.DatiAtleti.athletes,
      // this.Servizioatleti.athletes = this.DatiAtleti.Servizioatleti,
      // this.DatiAtleti.name.athletes = this.DatiAtleti.DatiAtleti,
      this.DatiAtleti = this.Servizioatleti.athletes
      
    }
  
    
  chiudi(){
    //chiudo la modal
    this.dialogRef.close()
  }
}
