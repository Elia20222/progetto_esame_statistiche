import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiziotipidisportService {

  constructor() { }

  getsports(id:number){

    for (let index = 0; index < this.sports.length; index ++ ) {
      var country = this.sports[index]

      if (id == country.id){
        return country.name
      }

    }

    return "stato non trovato";
  }

   
  sports = [
      {
        "drawSupport": true,
        "id": 1,
        "imageVersion": 1,
        "liveGames": 0,
        "name": "Football",
        "nameForURL": "football",
        "totalGames": 83
      },
      {
        "id": 2,
        "imageVersion": 1,
        "liveGames": 0,
        "name": "Basketball",
        "nameForURL": "basketball",
        "totalGames": 44
      },
      {
        "id": 3,
        "imageVersion": 1,
        "liveGames": 4,
        "name": "Tennis",
        "nameForURL": "tennis",
        "totalGames": 81
      },
      {
        "id": 4,
        "imageVersion": 1,
        "liveGames": 0,
        "name": "Hockey",
        "nameForURL": "hockey",
        "totalGames": 5
      },
      {
        "drawSupport": true,
        "id": 9,
        "imageVersion": 1,
        "liveGames": 0,
        "name": "Rugby",
        "nameForURL": "rugby",
        "totalGames": 0
      },
      {
        "id": 6,
        "imageVersion": 1,
        "liveGames": 0,
        "name": "A. Football",
        "nameForURL": "a.-football",
        "totalGames": 0
      },
      {
        "id": 7,
        "imageVersion": 1,
        "liveGames": 1,
        "name": "Baseball",
        "nameForURL": "baseball",
        "totalGames": 36
      },
      {
        "id": 11,
        "imageVersion": 1,
        "liveGames": 0,
        "name": "Cricket",
        "nameForURL": "cricket",
        "totalGames": 0
      },
      {
        "drawSupport": true,
        "id": 5,
        "imageVersion": 1,
        "liveGames": 0,
        "name": "Handball",
        "nameForURL": "handball",
        "totalGames": 2
      },
      {
        "id": 8,
        "imageVersion": 1,
        "liveGames": 0,
        "name": "Volleyball",
        "nameForURL": "volleyball",
        "totalGames": 3
      }
    ]
    "ttl": 600
  
}
