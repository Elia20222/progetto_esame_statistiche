import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioatletiService {

  constructor() { }


  getGiocatori(id:number){

    for (let index = 0; index < this.athletes.length; index ++ ) {
      var atleti = this.athletes[index]

      if (id == atleti.id){
        return atleti.name
      }


    }

    return "atleta non trovato";
  }
  
    athletes = [
      {
        "age": 38,
        "clubId": 1317,
        "formationPosition": {
          "id": 20,
          "name": "Small Forward",
          "order": 20,
          "shortName": "SF"
        },
        "gender": 1,
        "id": 53358,
        "imageVersion": 0,
        "name": "LeBron James",
        "nameForURL": "lebron-james",
        "nationalTeamId": 2397,
        "nationalTeamStatsText": "",
        "nationalityId": 18,
        "nationalityName": "USA",
        "position": {
          "id": 7,
          "name": "Forward",
          "shortName": "F"
        },
        "shortName": "L. James",
        "sportId": 2,
        "status": 1
      },
      {
        "age": 35,
        "clubId": 1322,
        "formationPosition": {
          "id": 18,
          "name": "Point Guard",
          "order": 18,
          "shortName": "PG"
        },
        "gender": 1,
        "id": 53625,
        "imageVersion": 0,
        "name": "Stephen Curry",
        "nameForURL": "stephen-curry",
        "nationalTeamId": 2397,
        "nationalTeamStatsText": "",
        "nationalityId": 18,
        "nationalityName": "USA",
        "position": {
          "id": 6,
          "name": "Guard",
          "shortName": "G"
        },
        "shortName": "S. Curry",
        "sportId": 2,
        "status": 1
      },
      {
        "age": 24,
        "clubId": 1321,
        "formationPosition": {
          "id": 18,
          "name": "Point Guard",
          "order": 18,
          "shortName": "PG"
        },
        "gender": 1,
        "id": 53106,
        "imageVersion": 0,
        "name": "Luka Doncic",
        "nameForURL": "luka-doncic",
        "nationalTeamId": 2355,
        "nationalTeamStatsText": "",
        "nationalityId": 46,
        "nationalityName": "Slovenia",
        "position": {
          "id": 6,
          "name": "Guard",
          "shortName": "G"
        },
        "shortName": "L. Doncic",
        "sportId": 2,
        "status": 1
      },
      {
        "age": 24,
        "clubId": 1307,
        "formationPosition": {
          "id": 18,
          "name": "Point Guard",
          "order": 18,
          "shortName": "PG"
        },
        "gender": 1,
        "id": 64118,
        "imageVersion": 0,
        "name": "Trae Young",
        "nameForURL": "trae-young",
        "nationalTeamId": 2397,
        "nationalTeamStatsText": "",
        "nationalityId": 18,
        "nationalityName": "USA",
        "position": {
          "id": 6,
          "name": "Guard",
          "shortName": "G"
        },
        "shortName": "T. Young",
        "sportId": 2,
        "status": 1
      },
      {
        "age": 31,
        "clubId": 1321,
        "formationPosition": {
          "id": 18,
          "name": "Point Guard",
          "order": 18,
          "shortName": "PG"
        },
        "gender": 1,
        "id": 53316,
        "imageVersion": 0,
        "name": "Kyrie Irving",
        "nameForURL": "kyrie-irving",
        "nationalTeamId": 2397,
        "nationalTeamStatsText": "",
        "nationalityId": 18,
        "nationalityName": "USA",
        "position": {
          "id": 6,
          "name": "Guard",
          "shortName": "G"
        },
        "shortName": "K. Irving",
        "sportId": 2,
        "status": 1
      },
      {
        "age": 25,
        "clubId": 1300,
        "formationPosition": {
          "id": 20,
          "name": "Small Forward",
          "order": 20,
          "shortName": "SF"
        },
        "gender": 1,
        "id": 53321,
        "imageVersion": 0,
        "name": "Jayson Tatum",
        "nameForURL": "jayson-tatum",
        "nationalTeamId": 2397,
        "nationalTeamStatsText": "",
        "nationalityId": 18,
        "nationalityName": "USA",
        "position": {
          "id": 7,
          "name": "Forward",
          "shortName": "F"
        },
        "shortName": "J. Tatum",
        "sportId": 2,
        "status": 1
      },
      {
        "age": 23,
        "clubId": 1327,
        "formationPosition": {
          "id": 18,
          "name": "Point Guard",
          "order": 18,
          "shortName": "PG"
        },
        "gender": 1,
        "id": 71524,
        "imageVersion": 0,
        "name": "Ja Morant",
        "nameForURL": "ja-morant",
        "nationalTeamId": 2397,
        "nationalTeamStatsText": "",
        "nationalityId": 18,
        "nationalityName": "USA",
        "position": {
          "id": 6,
          "name": "Guard",
          "shortName": "G"
        },
        "sportId": 2,
        "status": 1
      },
      {
        "age": 31,
        "clubId": 1326,
        "formationPosition": {
          "id": 20,
          "name": "Small Forward",
          "order": 20,
          "shortName": "SF"
        },
        "gender": 1,
        "id": 53753,
        "imageVersion": 0,
        "name": "Kawhi Leonard",
        "nameForURL": "kawhi-leonard",
        "nationalTeamId": 2397,
        "nationalTeamStatsText": "",
        "nationalityId": 18,
        "nationalityName": "USA",
        "position": {
          "id": 7,
          "name": "Forward",
          "shortName": "F"
        },
        "shortName": "K. Leonard",
        "sportId": 2,
        "status": 1
      }
    ]
    "competitions": [
      {
        "color": "#006BB7",
        "competitorsType": 0,
        "countryId": 18,
        "currentPhaseName": "Playoffs",
        "currentPhaseNum": 2,
        "currentSeasonNum": 83,
        "currentStageNum": 5,
        "currentStageType": 3,
        "hasBrackets": true,
        "id": 103,
        "imageVersion": 3,
        "name": "NBA",
        "nameForURL": "nba",
        "popularityRank": 12483959,
        "sportId": 2
      },
      {
        "color": "#1C0F6D",
        "competitorsType": 0,
        "countryId": 19,
        "currentSeasonNum": 5,
        "currentStageNum": 5,
        "currentStageType": 3,
        "hasBrackets": true,
        "id": 359,
        "imageVersion": 4,
        "name": "Eurobasket",
        "nameForURL": "eurobasket",
        "popularityRank": 375462,
        "sportId": 2
      },
      {
        "competitorsType": 0,
        "countryId": 19,
        "currentSeasonNum": 2,
        "currentStageNum": 4,
        "currentStageType": 4,
        "hasBrackets": false,
        "id": 6894,
        "imageVersion": 1,
        "name": "World Cup Qualifications - Europe",
        "nameForURL": "world-cup-qualifications---europe",
        "popularityRank": 148521,
        "sportId": 2
      },
      {
        "color": "#D1CECE",
        "competitorsType": 0,
        "countryId": 176,
        "currentSeasonNum": 6,
        "currentStageNum": 4,
        "currentStageType": 1,
        "hasBrackets": true,
        "id": 6394,
        "imageVersion": 2,
        "name": "Olympics Basketball - Men",
        "nameForURL": "olympics-basketball---men",
        "popularityRank": 378929,
        "sportId": 2
      },
      {
        "competitorsType": 0,
        "countryId": 303,
        "currentSeasonNum": 2,
        "currentStageNum": 2,
        "currentStageType": 1,
        "hasBrackets": false,
        "id": 6979,
        "imageVersion": 1,
        "name": "WC Qualifications",
        "nameForURL": "wc-qualifications",
        "popularityRank": 91024,
        "sportId": 2
      }
    ]
    "competitors": [
      {
        "color": "#552583",
        "competitorNum": 0,
        "countryId": 323,
        "hasSquad": true,
        "id": 1317,
        "imageVersion": 1,
        "mainCompetitionId": 103,
        "name": "Los Angeles Lakers",
        "nameForURL": "los-angeles-lakers",
        "popularityRank": 3464,
        "shortName": "Lakers",
        "sportId": 2,
        "symbolicName": "LAL",
        "type": 1
      },
      {
        "color": "#1D428A",
        "competitorNum": 0,
        "countryId": 323,
        "hasSquad": true,
        "id": 1322,
        "imageVersion": 2,
        "mainCompetitionId": 103,
        "name": "Golden State Warriors",
        "nameForURL": "golden-state-warriors",
        "popularityRank": 3017,
        "shortName": "Warriors",
        "sportId": 2,
        "symbolicName": "GSW",
        "type": 1
      },
      {
        "color": "#00538C",
        "competitorNum": 0,
        "countryId": 375,
        "hasSquad": true,
        "id": 1321,
        "imageVersion": 1,
        "mainCompetitionId": 103,
        "name": "Dallas Mavericks",
        "nameForURL": "dallas-mavericks",
        "popularityRank": 840,
        "shortName": "Mavericks",
        "sportId": 2,
        "symbolicName": "DAL",
        "type": 1
      },
      {
        "color": "#E03A3E",
        "competitorNum": 0,
        "countryId": 328,
        "hasSquad": true,
        "id": 1307,
        "imageVersion": 2,
        "mainCompetitionId": 103,
        "name": "Atlanta Hawks",
        "nameForURL": "atlanta-hawks",
        "popularityRank": 827,
        "shortName": "Hawks",
        "sportId": 2,
        "symbolicName": "ATL",
        "type": 1
      },
      {
        "color": "#007A33",
        "competitorNum": 0,
        "countryId": 339,
        "hasSquad": true,
        "id": 1300,
        "imageVersion": 2,
        "mainCompetitionId": 103,
        "name": "Boston Celtics",
        "nameForURL": "boston-celtics",
        "popularityRank": 2792,
        "shortName": "Celtics",
        "sportId": 2,
        "symbolicName": "BOS",
        "type": 1
      },
      {
        "color": "#5D76A9",
        "competitorNum": 0,
        "countryId": 360,
        "hasSquad": true,
        "id": 1327,
        "imageVersion": 1,
        "mainCompetitionId": 103,
        "name": "Memphis Grizzlies",
        "nameForURL": "memphis-grizzlies",
        "popularityRank": 806,
        "shortName": "Grizzlies",
        "sportId": 2,
        "symbolicName": "MEM",
        "type": 1
      },
      {
        "color": "#C8102E",
        "competitorNum": 0,
        "countryId": 323,
        "hasSquad": true,
        "id": 1326,
        "imageVersion": 1,
        "mainCompetitionId": 103,
        "name": "Los Angeles Clippers",
        "nameForURL": "los-angeles-clippers",
        "popularityRank": 978,
        "shortName": "Clippers",
        "sportId": 2,
        "symbolicName": "LAC",
        "type": 1
      },
      {
        "color": "#21282D",
        "competitorNum": 0,
        "countryId": 18,
        "hasSquad": true,
        "id": 2397,
        "imageVersion": 1,
        "longName": "USA National Team",
        "mainCompetitionId": 5440,
        "name": "USA",
        "nameForURL": "usa",
        "popularityRank": 546,
        "sportId": 2,
        "symbolicName": "USA",
        "type": 2
      },
      {
        "color": "#004080",
        "competitorNum": 0,
        "countryId": 46,
        "hasSquad": true,
        "id": 2355,
        "imageVersion": 1,
        "mainCompetitionId": 5440,
        "name": "Slovenia",
        "nameForURL": "slovenia",
        "popularityRank": 93,
        "sportId": 2,
        "symbolicName": "SVN",
        "type": 2
      }
    ]
    "countries": [
      {
        "id": 18,
        "imageVersion": 1,
        "name": "USA",
        "nameForURL": "usa",
        "sportTypes": [
          1,
          2,
          4,
          6,
          7,
          9
        ]
      },
      {
        "id": 19,
        "imageVersion": 1,
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
        ]
      },
      {
        "id": 176,
        "imageVersion": 5,
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
        ]
      },
      {
        "id": 303,
        "imageVersion": 1,
        "name": "America",
        "nameForURL": "america",
        "sportTypes": [
          1,
          2
        ]
      },
      {
        "id": 323,
        "imageVersion": 2,
        "name": "California (USA)",
        "nameForURL": "california-(usa)"
      },
      {
        "id": 375,
        "imageVersion": 2,
        "name": "Texas (USA)",
        "nameForURL": "texas-(usa)"
      },
      {
        "id": 328,
        "imageVersion": 4,
        "name": "Georgia (USA)",
        "nameForURL": "georgia-(usa)"
      },
      {
        "id": 339,
        "imageVersion": 2,
        "name": "Massachusetts (USA)",
        "nameForURL": "massachusetts-(usa)"
      },
      {
        "id": 360,
        "imageVersion": 2,
        "name": "Tennessee (USA)",
        "nameForURL": "tennessee-(usa)"
      },
      {
        "id": 46,
        "imageVersion": 1,
        "name": "Slovenia",
        "nameForURL": "slovenia",
        "sportTypes": [
          1,
          2,
          5
        ]
      }
    ]
    "lastUpdateId": 0
    "sports": [
      {
        "id": 2,
        "imageVersion": 1,
        "name": "Basketball",
        "nameForURL": "basketball"
      }
    ]
    "ttl": 0
  }


