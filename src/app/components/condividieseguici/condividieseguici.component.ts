import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Contatti } from 'src/app/contatti';

@Component({
  selector: 'app-condividieseguici',
  templateUrl: './condividieseguici.component.html',
  styleUrls: ['./condividieseguici.component.css']
})
export class CondividieseguiciComponent {

  @Input()contatti!:Contatti

  constructor(private dialog : MatDialog) { }

  getcontatti(){
    this.dialog.open(CondividieseguiciComponent,{
      minWidth:"500px",
      data: this.contatti
    })
  }

}

