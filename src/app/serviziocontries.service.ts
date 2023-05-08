import { Injectable } from '@angular/core';
import { ApiService } from './services/api.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Squadra } from 'src/app/squadra';

@Injectable({
  providedIn: 'root'
})
export class ServiziocontriesService {
  
  constructor(private Apiservice : ApiService) { }

  
  //for (let i = 0; i < countryId.length; i++) {
    //const element = countryId[i];
    
  //}

  getcountrie(id:number){

    for (let index = 0; index < this.countries.length; index ++ ) {
      var country = this.countries[index]

      if (id == country.id){
        return country.name
      }


    }

    return "stato non trovato";
  }


countries = 
  [
    {
      "id": 1,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "England",
      "nameForURL": "england",
      "sportTypes": [
        1,
        4,
        9,
        11
      ],
      "totalGames": 30
    },
    {
      "id": 185,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Afghanistan",
      "nameForURL": "afghanistan",
      "sportTypes": [
        1,
        8
      ],
      "totalGames": 0
    },
    {
      "id": 44,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Africa",
      "nameForURL": "africa",
      "sportTypes": [
        1,
        2,
        5
      ],
      "totalGames": 0
    },
    {
      "id": 76,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Albania",
      "nameForURL": "albania",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 139,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Algeria",
      "nameForURL": "algeria",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 303,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "America",
      "nameForURL": "america",
      "sportTypes": [
        1,
        2
      ],
      "totalGames": 0
    },
    {
      "id": 103,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Andorra",
      "nameForURL": "andorra",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 136,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Angola",
      "nameForURL": "angola",
      "sportTypes": [
        1
      ],
      "totalGames": 1
    },
    {
      "id": 10,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Argentina",
      "nameForURL": "argentina",
      "sportTypes": [
        1,
        2,
        8,
        9
      ],
      "totalGames": 8
    },
    {
      "id": 49,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Armenia",
      "nameForURL": "armenia",
      "sportTypes": [
        1
      ],
      "totalGames": 2
    },
    {
      "id": 171,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Asia",
      "nameForURL": "asia",
      "sportTypes": [
        1,
        2,
        4,
        5,
        7,
        8,
        11
      ],
      "totalGames": 2
    },
    {
      "id": 36,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Australia",
      "nameForURL": "australia",
      "sportTypes": [
        1,
        2,
        4,
        9,
        11
      ],
      "totalGames": 0
    },
    {
      "id": 20,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Austria",
      "nameForURL": "austria",
      "sportTypes": [
        1,
        2,
        4,
        5,
        6,
        8
      ],
      "totalGames": 0
    },
    {
      "id": 77,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Azerbaijan",
      "nameForURL": "azerbaijan",
      "sportTypes": [
        1
      ],
      "totalGames": 1
    },
    {
      "id": 186,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Bahamas",
      "nameForURL": "bahamas",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 116,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Bahrain",
      "nameForURL": "bahrain",
      "sportTypes": [
        1
      ],
      "totalGames": 5
    },
    {
      "id": 219,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Bangladesh",
      "nameForURL": "bangladesh",
      "sportTypes": [
        1,
        11
      ],
      "totalGames": 0
    },
    {
      "id": 104,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Belarus",
      "nameForURL": "belarus",
      "sportTypes": [
        1,
        4,
        5
      ],
      "totalGames": 6
    },
    {
      "id": 16,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Belgium",
      "nameForURL": "belgium",
      "sportTypes": [
        1,
        2,
        4,
        8,
        9
      ],
      "totalGames": 0
    },
    {
      "id": 194,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Bermuda",
      "nameForURL": "bermuda",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 113,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Bolivia",
      "nameForURL": "bolivia",
      "sportTypes": [
        1
      ],
      "totalGames": 1
    },
    {
      "id": 57,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Bosnia Herzegovina",
      "nameForURL": "bosnia-herzegovina",
      "sportTypes": [
        1,
        2
      ],
      "totalGames": 0
    },
    {
      "id": 63,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Botswana",
      "nameForURL": "botswana",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 21,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Brazil",
      "nameForURL": "brazil",
      "sportTypes": [
        1,
        2,
        6,
        8
      ],
      "totalGames": 8
    },
    {
      "id": 276,
      "imageVersion": 6,
      "liveGames": 0,
      "name": "Brunei Darussalam",
      "nameForURL": "brunei-darussalam",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 40,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Bulgaria",
      "nameForURL": "bulgaria",
      "sportTypes": [
        1,
        2,
        8
      ],
      "totalGames": 6
    },
    {
      "id": 192,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Burundi",
      "nameForURL": "burundi",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 73,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Cameroon",
      "nameForURL": "cameroon",
      "sportTypes": [
        1,
        2
      ],
      "totalGames": 0
    },
    {
      "id": 66,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Canada",
      "nameForURL": "canada",
      "sportTypes": [
        1,
        2,
        4,
        6,
        9,
        11
      ],
      "totalGames": 0
    },
    {
      "id": 28,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Chile",
      "nameForURL": "chile",
      "sportTypes": [
        1,
        2
      ],
      "totalGames": 0
    },
    {
      "id": 35,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "China",
      "nameForURL": "china",
      "sportTypes": [
        1,
        2
      ],
      "totalGames": 0
    },
    {
      "id": 179,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Chinese Taipei",
      "nameForURL": "chinese-taipei",
      "sportTypes": [
        1,
        8
      ],
      "totalGames": 0
    },
    {
      "id": 109,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Colombia",
      "nameForURL": "colombia",
      "sportTypes": [
        1,
        2,
        7
      ],
      "totalGames": 2
    },
    {
      "id": 153,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Costa Rica",
      "nameForURL": "costa-rica",
      "sportTypes": [
        1,
        2
      ],
      "totalGames": 0
    },
    {
      "id": 38,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Croatia",
      "nameForURL": "croatia",
      "sportTypes": [
        1,
        2,
        5
      ],
      "totalGames": 0
    },
    {
      "id": 175,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Cuba",
      "nameForURL": "cuba",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 39,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Cyprus",
      "nameForURL": "cyprus",
      "sportTypes": [
        1,
        2
      ],
      "totalGames": 2
    },
    {
      "id": 22,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Czech Republic",
      "nameForURL": "czech-republic",
      "sportTypes": [
        1,
        2,
        4,
        6,
        7,
        8
      ],
      "totalGames": 1
    },
    {
      "id": 23,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Denmark",
      "nameForURL": "denmark",
      "sportTypes": [
        1,
        2,
        4,
        5,
        8
      ],
      "totalGames": 1
    },
    {
      "id": 183,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Dominican Republic",
      "nameForURL": "dominican-republic",
      "sportTypes": [
        1,
        7
      ],
      "totalGames": 0
    },
    {
      "id": 51,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Ecuador",
      "nameForURL": "ecuador",
      "sportTypes": [
        1,
        2
      ],
      "totalGames": 1
    },
    {
      "id": 131,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Egypt",
      "nameForURL": "egypt",
      "sportTypes": [
        1,
        2,
        5
      ],
      "totalGames": 4
    },
    {
      "id": 147,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "El Salvador",
      "nameForURL": "el-salvador",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 102,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Estonia",
      "nameForURL": "estonia",
      "sportTypes": [
        1,
        2
      ],
      "totalGames": 0
    },
    {
      "id": 70,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Ethiopia",
      "nameForURL": "ethiopia",
      "sportTypes": [
        1
      ],
      "totalGames": 2
    },
    {
      "id": 19,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Europe",
      "nameForURL": "europe",
      "sportTypes": [
        1,
        2,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "totalGames": 0
    },
    {
      "id": 106,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Faroe Islands",
      "nameForURL": "faroe-islands",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 61,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Fiji",
      "nameForURL": "fiji",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 25,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Finland",
      "nameForURL": "finland",
      "sportTypes": [
        1,
        2,
        4,
        5,
        7,
        8
      ],
      "totalGames": 1
    },
    {
      "id": 5,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "France",
      "nameForURL": "france",
      "sportTypes": [
        1,
        2,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "totalGames": 1
    },
    {
      "id": 143,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Gabon",
      "nameForURL": "gabon",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 78,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Georgia",
      "nameForURL": "georgia",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 4,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Germany",
      "nameForURL": "germany",
      "sportTypes": [
        1,
        2,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "totalGames": 1
    },
    {
      "id": 65,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Ghana",
      "nameForURL": "ghana",
      "sportTypes": [
        1
      ],
      "totalGames": 2
    },
    {
      "id": 209,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Gibraltar",
      "nameForURL": "gibraltar",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 13,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Greece",
      "nameForURL": "greece",
      "sportTypes": [
        1,
        2,
        5,
        8
      ],
      "totalGames": 10
    },
    {
      "id": 177,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Grenada",
      "nameForURL": "grenada",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 140,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Guatemala",
      "nameForURL": "guatemala",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 169,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Honduras",
      "nameForURL": "honduras",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 79,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Hong Kong",
      "nameForURL": "hong-kong",
      "sportTypes": [
        1,
        11
      ],
      "totalGames": 0
    },
    {
      "id": 30,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Hungary",
      "nameForURL": "hungary",
      "sportTypes": [
        1,
        2,
        5
      ],
      "totalGames": 1
    },
    {
      "id": 32,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Iceland",
      "nameForURL": "iceland",
      "sportTypes": [
        1
      ],
      "totalGames": 4
    },
    {
      "id": 80,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "India",
      "nameForURL": "india",
      "sportTypes": [
        1,
        11
      ],
      "totalGames": 0
    },
    {
      "id": 75,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Indonesia",
      "nameForURL": "indonesia",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 54,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "International",
      "nameForURL": "international",
      "sportTypes": [
        1,
        2,
        4,
        5,
        7,
        8,
        9,
        11,
        13
      ],
      "totalGames": 1
    },
    {
      "id": 378,
      "imageVersion": 2,
      "liveGames": 0,
      "name": "IOC",
      "nameForURL": "ioc",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 81,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Iran",
      "nameForURL": "iran",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 114,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Iraq",
      "nameForURL": "iraq",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 9,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Ireland",
      "nameForURL": "ireland",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 6,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Israel",
      "nameForURL": "israel",
      "sportTypes": [
        1,
        2,
        5
      ],
      "totalGames": 5
    },
    {
      "id": 3,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Italy",
      "nameForURL": "italy",
      "sportTypes": [
        1,
        2,
        4,
        6,
        7,
        8,
        9
      ],
      "totalGames": 3
    },
    {
      "id": 74,
      "imageVersion": 3,
      "liveGames": 0,
      "name": "Ivory Coast",
      "nameForURL": "ivory-coast",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 151,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Jamaica",
      "nameForURL": "jamaica",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 34,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Japan",
      "nameForURL": "japan",
      "sportTypes": [
        1,
        7
      ],
      "totalGames": 0
    },
    {
      "id": 119,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Jordan",
      "nameForURL": "jordan",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 105,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Kazakhstan",
      "nameForURL": "kazakhstan",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 144,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Kenya",
      "nameForURL": "kenya",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 205,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Kosovo",
      "nameForURL": "kosovo",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 126,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Kuwait",
      "nameForURL": "kuwait",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 202,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Kyrgyzstan",
      "nameForURL": "kyrgyzstan",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 41,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Latvia",
      "nameForURL": "latvia",
      "sportTypes": [
        1,
        2,
        4
      ],
      "totalGames": 2
    },
    {
      "id": 123,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Lebanon",
      "nameForURL": "lebanon",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 138,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Liberia",
      "nameForURL": "liberia",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 161,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Libya",
      "nameForURL": "libya",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 101,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Liechtenstein",
      "nameForURL": "liechtenstein",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 42,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Lithuania",
      "nameForURL": "lithuania",
      "sportTypes": [
        1,
        2
      ],
      "totalGames": 0
    },
    {
      "id": 92,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Luxembourg",
      "nameForURL": "luxembourg",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 82,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Malaysia",
      "nameForURL": "malaysia",
      "sportTypes": [
        1,
        11
      ],
      "totalGames": 0
    },
    {
      "id": 93,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Malta",
      "nameForURL": "malta",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 190,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Mauritius",
      "nameForURL": "mauritius",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 31,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Mexico",
      "nameForURL": "mexico",
      "sportTypes": [
        1,
        2,
        7
      ],
      "totalGames": 5
    },
    {
      "id": 91,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Moldova",
      "nameForURL": "moldova",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 181,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Mongolia",
      "nameForURL": "mongolia",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 84,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Montenegro",
      "nameForURL": "montenegro",
      "sportTypes": [
        1,
        2
      ],
      "totalGames": 0
    },
    {
      "id": 127,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Morocco",
      "nameForURL": "morocco",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 55,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Myanmar",
      "nameForURL": "myanmar",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 188,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "National Teams",
      "nameForURL": "national-teams",
      "sportTypes": [
        1,
        2
      ],
      "totalGames": 0
    },
    {
      "id": 7,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Netherlands",
      "nameForURL": "netherlands",
      "sportTypes": [
        1,
        2,
        4,
        8
      ],
      "totalGames": 4
    },
    {
      "id": 159,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "New Zealand",
      "nameForURL": "new-zealand",
      "sportTypes": [
        1,
        2,
        9,
        11
      ],
      "totalGames": 0
    },
    {
      "id": 182,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Nicaragua",
      "nameForURL": "nicaragua",
      "sportTypes": [
        1,
        2,
        7
      ],
      "totalGames": 0
    },
    {
      "id": 83,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Nigeria",
      "nameForURL": "nigeria",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 47,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "North America",
      "nameForURL": "north-america",
      "sportTypes": [
        1,
        2,
        7,
        8
      ],
      "totalGames": 0
    },
    {
      "id": 180,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "North Korea",
      "nameForURL": "north-korea",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 56,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "North Macedonia",
      "nameForURL": "north-macedonia",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 99,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Northern Ireland",
      "nameForURL": "northern-ireland",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 27,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Norway",
      "nameForURL": "norway",
      "sportTypes": [
        1,
        2,
        4,
        5,
        6,
        8
      ],
      "totalGames": 1
    },
    {
      "id": 208,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Oceania",
      "nameForURL": "oceania",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 176,
      "imageVersion": 5,
      "liveGames": 0,
      "name": "Olympics",
      "nameForURL": "olympics",
      "sportTypes": [
        1,
        2,
        3,
        5,
        7,
        8,
        9,
        10
      ],
      "totalGames": 0
    },
    {
      "id": 117,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Oman",
      "nameForURL": "oman",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 172,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Pakistan",
      "nameForURL": "pakistan",
      "sportTypes": [
        1,
        11
      ],
      "totalGames": 0
    },
    {
      "id": 226,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Palestine",
      "nameForURL": "palestine",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 146,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Panama",
      "nameForURL": "panama",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 108,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Paraguay",
      "nameForURL": "paraguay",
      "sportTypes": [
        1,
        2
      ],
      "totalGames": 3
    },
    {
      "id": 112,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Peru",
      "nameForURL": "peru",
      "sportTypes": [
        1
      ],
      "totalGames": 2
    },
    {
      "id": 37,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Poland",
      "nameForURL": "poland",
      "sportTypes": [
        1,
        2,
        4,
        5,
        6,
        8
      ],
      "totalGames": 2
    },
    {
      "id": 11,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Portugal",
      "nameForURL": "portugal",
      "sportTypes": [
        1,
        2,
        8
      ],
      "totalGames": 2
    },
    {
      "id": 115,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Qatar",
      "nameForURL": "qatar",
      "sportTypes": [
        1
      ],
      "totalGames": 5
    },
    {
      "id": 377,
      "imageVersion": 4,
      "liveGames": 0,
      "name": "ROC",
      "nameForURL": "roc",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 29,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Romania",
      "nameForURL": "romania",
      "sportTypes": [
        1,
        2,
        8
      ],
      "totalGames": 3
    },
    {
      "id": 14,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Russia",
      "nameForURL": "russia",
      "sportTypes": [
        1,
        2,
        4,
        5,
        8
      ],
      "totalGames": 1
    },
    {
      "id": 94,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "San Marino",
      "nameForURL": "san-marino",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 122,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Saudi Arabia",
      "nameForURL": "saudi-arabia",
      "sportTypes": [
        1,
        2
      ],
      "totalGames": 6
    },
    {
      "id": 8,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Scotland",
      "nameForURL": "scotland",
      "sportTypes": [
        1,
        9
      ],
      "totalGames": 0
    },
    {
      "id": 133,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Senegal",
      "nameForURL": "senegal",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 85,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Serbia",
      "nameForURL": "serbia",
      "sportTypes": [
        1,
        2
      ],
      "totalGames": 4
    },
    {
      "id": 50,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Singapore",
      "nameForURL": "singapore",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 33,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Slovakia",
      "nameForURL": "slovakia",
      "sportTypes": [
        1,
        2,
        4,
        5
      ],
      "totalGames": 0
    },
    {
      "id": 46,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Slovenia",
      "nameForURL": "slovenia",
      "sportTypes": [
        1,
        2,
        5
      ],
      "totalGames": 0
    },
    {
      "id": 134,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "South Africa",
      "nameForURL": "south-africa",
      "sportTypes": [
        1,
        9,
        11
      ],
      "totalGames": 0
    },
    {
      "id": 17,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "South America",
      "nameForURL": "south-america",
      "sportTypes": [
        1,
        2,
        8,
        9
      ],
      "totalGames": 0
    },
    {
      "id": 86,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "South Korea",
      "nameForURL": "south-korea",
      "sportTypes": [
        1,
        2,
        7
      ],
      "totalGames": 0
    },
    {
      "id": 2,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Spain",
      "nameForURL": "spain",
      "sportTypes": [
        1,
        2,
        5,
        8,
        9
      ],
      "totalGames": 1
    },
    {
      "id": 314,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Stay Home",
      "nameForURL": "stay-home",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 130,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Sudan",
      "nameForURL": "sudan",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 24,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Sweden",
      "nameForURL": "sweden",
      "sportTypes": [
        1,
        2,
        4,
        5,
        7,
        8,
        9
      ],
      "totalGames": 11
    },
    {
      "id": 15,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Switzerland",
      "nameForURL": "switzerland",
      "sportTypes": [
        1,
        2,
        4,
        5,
        6
      ],
      "totalGames": 0
    },
    {
      "id": 125,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Syria",
      "nameForURL": "syria",
      "sportTypes": [
        1
      ],
      "totalGames": 3
    },
    {
      "id": 184,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Tajikistan",
      "nameForURL": "tajikistan",
      "sportTypes": [
        1,
        2,
        8
      ],
      "totalGames": 0
    },
    {
      "id": 141,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Tanzania",
      "nameForURL": "tanzania",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 304,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "TestCountry",
      "nameForURL": "testcountry",
      "sportTypes": [
        1,
        2,
        4,
        6
      ],
      "totalGames": 0
    },
    {
      "id": 118,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Thailand",
      "nameForURL": "thailand",
      "sportTypes": [
        1,
        2
      ],
      "totalGames": 0
    },
    {
      "id": 200,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "The Phillipines",
      "nameForURL": "the-phillipines",
      "sportTypes": [
        1,
        2
      ],
      "totalGames": 0
    },
    {
      "id": 71,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Togo",
      "nameForURL": "togo",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 148,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Trinidad And Tobago",
      "nameForURL": "trinidad-and-tobago",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 135,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Tunisia",
      "nameForURL": "tunisia",
      "sportTypes": [
        1
      ],
      "totalGames": 4
    },
    {
      "id": 12,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Turkiye",
      "nameForURL": "turkiye",
      "sportTypes": [
        1,
        2,
        8
      ],
      "totalGames": 2
    },
    {
      "id": 120,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Turkmenistan",
      "nameForURL": "turkmenistan",
      "sportTypes": [
        1,
        2
      ],
      "totalGames": 0
    },
    {
      "id": 124,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "UAE",
      "nameForURL": "uae",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 137,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Uganda",
      "nameForURL": "uganda",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 26,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Ukraine",
      "nameForURL": "ukraine",
      "sportTypes": [
        1,
        2,
        4
      ],
      "totalGames": 5
    },
    {
      "id": 111,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Uruguay",
      "nameForURL": "uruguay",
      "sportTypes": [
        1,
        2
      ],
      "totalGames": 2
    },
    {
      "id": 18,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "USA",
      "nameForURL": "usa",
      "sportTypes": [
        1,
        2,
        4,
        6,
        7,
        9
      ],
      "totalGames": 0
    },
    {
      "id": 121,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Uzbekistan",
      "nameForURL": "uzbekistan",
      "sportTypes": [
        1
      ],
      "totalGames": 1
    },
    {
      "id": 110,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Venezuela",
      "nameForURL": "venezuela",
      "sportTypes": [
        1,
        2,
        7
      ],
      "totalGames": 0
    },
    {
      "id": 155,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Vietnam",
      "nameForURL": "vietnam",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 100,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Wales",
      "nameForURL": "wales",
      "sportTypes": [
        1,
        5,
        9
      ],
      "totalGames": 0
    },
    {
      "id": 170,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Yemen",
      "nameForURL": "yemen",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 132,
      "imageVersion": 6,
      "liveGames": 0,
      "name": "Zambia",
      "nameForURL": "zambia",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    },
    {
      "id": 60,
      "imageVersion": 1,
      "liveGames": 0,
      "name": "Zimbabwe",
      "nameForURL": "zimbabwe",
      "sportTypes": [
        1
      ],
      "totalGames": 0
    }
  ]
}