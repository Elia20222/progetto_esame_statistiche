import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { LocalstorageService } from 'src/app/localstorage.service';
import { ApiService } from 'src/app/services/api.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Squadra } from 'src/app/squadra';

@Component({
  selector: 'app-gare-e',
  templateUrl: './gare-e.component.html',
  styleUrls: ['./gare-e.component.css']
})
export class GareEComponent {

  Squadra!: Squadra
  squadre: Squadra []= []

  constructor(private Apiservice : ApiService){
    this.getlistasquadre()
   }
   getlistasquadre(){
     
   }
}
