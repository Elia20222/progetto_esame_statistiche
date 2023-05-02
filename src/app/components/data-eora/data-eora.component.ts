import { Component } from '@angular/core';
import { IdentificazioneSport } from 'src/app/identificazione-sport';
import { MatDateFormats } from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-data-eora',
  templateUrl: './data-eora.component.html',
  styleUrls: ['./data-eora.component.css']
})
export class DataEOraComponent {
  
    Sportcorrente: IdentificazioneSport = {

    
    include: [],
    affiliate_ids: [],
    offset: []
  }


}
