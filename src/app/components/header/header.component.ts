import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Squadra } from 'src/app/squadra';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  CLASSIFICASCELTA!:string
  
  classifica:any
  // [{punteggio:300000},{punteggio:50}]
  indiceUtente: number = -1;
  
  squadre: Squadra[]=[];

  constructor(private api:ApiService,
    private dialog: MatDialog) { }

    openDialog() {
      this.dialog.open(DialogComponent, {
        width:'30%'
      });
    }

    


  getDati(){
    this.classifica= this.api.getfakerisultati()
    this.squadre= this.classifica.competitors
    console.log("squadre", this.squadre)
    console.log("classifica")
    
    
  }
  

 

}
