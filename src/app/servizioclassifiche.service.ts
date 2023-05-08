import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioclassificheService {

  constructor() { }

  getSportdifferenti(idelencosport: number){
    switch (idelencosport) {
      case 0:
        return "Football";
        case 1:
        return "Basketball";
        case 2:
        return "Tennis";
        case 3:
        return "Hockey";
        case 4:
        return "Rugby";
        case 5:
        return "A. Football";
        case 6:
        return "Baseball";
        case 7:
        return "Cricket";
        case 8:
        return "Handball";
        case 9:
        return "Volleyball";
        default:
          return "errore"
        } 
      }
    }

    
