import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { Contatti } from 'src/app/contatti';


export interface DialogData {
  contattoregistrato:'utenteregistrato';
  registrazioneeseguita: string

}

@Component({
  selector: 'app-popupcandidatura',
  templateUrl: './popupcandidatura.component.html',
  styleUrls: ['./popupcandidatura.component.css']
})
export class PopupcandidaturaComponent {
  
  @Input() contatti: Contatti | undefined
  @Output() CONTATTOSALVATO: EventEmitter<any> = new EventEmitter()
  constructor(public dialog: MatDialogRef<PopupcandidaturaComponent>, public MatDialogRef:MatDialogModule) {}

  

 

  confermaedesci()
  {
    this.dialog.close("")
  }
}
// export class DialogDataExampleDialog {
//   constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
// }
