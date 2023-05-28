import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointservizioService {

  constructor() { }

  
    "competitions": [
      {
        "color": "#006BB7",
        "competitorsType": 1,
        "countryId": 18,
        "currentPhaseName": "Playoffs",
        "currentPhaseNum": 2,
        "currentSeasonNum": 83,
        "currentStageType": 3,
        "hasBrackets": true,
        "hasStandings": true,
        "hasStandingsGroups": false,
        "hasStats": true,
        "id": 103,
        "imageVersion": 3,
        "name": "NBA",
        "nameForURL": "nba",
        "popularityRank": 12743298,
        "sportId": 2
      }
    ]
    "competitors": [
      {
        "color": "#860038",
        "competitorNum": 0,
        "countryId": 353,
        "hasSquad": true,
        "id": 1303,
        "imageVersion": 1,
        "mainCompetitionId": 103,
        "name": "Cleveland Cavaliers",
        "nameForURL": "cleveland-cavaliers",
        "popularityRank": 1589,
        "shortName": "Cavaliers",
        "sportId": 2,
        "symbolicName": "CLE",
        "type": 1
      },
      {
        "color": "#98002E",
        "competitorNum": 0,
        "countryId": 327,
        "hasSquad": true,
        "id": 1314,
        "imageVersion": 1,
        "mainCompetitionId": 0,
        "name": "Miami Heat",
        "nameForURL": "miami-heat",
        "popularityRank": 2007,
        "shortName": "Heat",
        "sportId": 2,
        "symbolicName": "MIA",
        "type": 1
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
          8,
          9
        ]
      },
      {
        "id": 353,
        "imageVersion": 2,
        "name": "Ohio (USA)",
        "nameForURL": "ohio-(usa)"
      },
      {
        "id": 327,
        "imageVersion": 2,
        "name": "Florida (USA)",
        "nameForURL": "florida-(usa)"
      },
      {
        "id": 12,
        "imageVersion": 1,
        "name": "Turkiye",
        "nameForURL": "turkiye",
        "sportTypes": [
          1,
          2,
          8
        ]
      },
      {
        "id": 2,
        "imageVersion": 1,
        "name": "Spain",
        "nameForURL": "spain",
        "sportTypes": [
          1,
          2,
          5,
          8,
          9
        ]
      },
      {
        "id": 21,
        "imageVersion": 1,
        "name": "Brazil",
        "nameForURL": "brazil",
        "sportTypes": [
          1,
          2,
          6,
          8
        ]
      },
      {
        "id": 69,
        "imageVersion": 1,
        "name": "Guinea",
        "nameForURL": "guinea"
      }
    ]
    "sports": [
      {
        "id": 2,
        "imageVersion": 1,
        "name": "Basketball",
        "nameForURL": "basketball"
      }
    ]
    "stats": [
      {
        "competitionId": 103,
        "id": 1,
        "name": "Points",
        "rows": [
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 53571,
              "imageVersion": 18,
              "name": "Donovan Mitchell",
              "nameForURL": "donovan-mitchell",
              "positionName": "Shooting Guard",
              "positionShortName": "SG",
              "shortName": "D. Mitchell"
            },
            "position": 1,
            "stats": [
              {
                "typeId": 7,
                "value": "28.3"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 71382,
              "imageVersion": 17,
              "name": "Darius Garland",
              "nameForURL": "darius-garland",
              "positionName": "Point Guard",
              "positionShortName": "PG",
              "shortName": "D. Garland"
            },
            "position": 2,
            "stats": [
              {
                "typeId": 7,
                "value": "21.6"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 90121,
              "imageVersion": 14,
              "name": "Evan Mobley",
              "nameForURL": "evan-mobley",
              "positionName": "Center",
              "positionShortName": "C",
              "shortName": "E. Mobley"
            },
            "position": 3,
            "stats": [
              {
                "typeId": 7,
                "value": "16.2"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 53436,
              "imageVersion": 26,
              "name": "Jarrett Allen",
              "nameForURL": "jarrett-allen",
              "positionName": "Center",
              "positionShortName": "C",
              "shortName": "J. Allen"
            },
            "position": 4,
            "stats": [
              {
                "typeId": 7,
                "value": "14.3"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 53443,
              "imageVersion": 26,
              "name": "Caris LeVert",
              "nameForURL": "caris-levert",
              "positionName": "Shooting Guard",
              "positionShortName": "SG",
              "shortName": "C. LeVert"
            },
            "position": 5,
            "stats": [
              {
                "typeId": 7,
                "value": "12.1"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 12,
              "id": 53361,
              "imageVersion": 22,
              "name": "Cedi Osman",
              "nameForURL": "cedi-osman",
              "positionName": "Small Forward",
              "positionShortName": "SF",
              "shortName": "C. Osman"
            },
            "position": 6,
            "stats": [
              {
                "typeId": 7,
                "value": "8.7"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1314,
              "countryId": 18,
              "id": 53360,
              "imageVersion": 23,
              "isLeftClub": true,
              "name": "Kevin Love",
              "nameForURL": "kevin-love",
              "positionName": "Power Forward",
              "positionShortName": "PF",
              "shortName": "K. Love"
            },
            "position": 7,
            "stats": [
              {
                "typeId": 7,
                "value": "8.5"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 53543,
              "imageVersion": 39,
              "name": "Danny Green",
              "nameForURL": "danny-green",
              "positionName": "Shooting Guard",
              "positionShortName": "SG",
              "shortName": "D. Green"
            },
            "position": 8,
            "stats": [
              {
                "typeId": 7,
                "value": "6.5"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 86033,
              "imageVersion": 16,
              "name": "Isaac Okoro",
              "nameForURL": "isaac-okoro",
              "positionName": "Shooting Guard",
              "positionShortName": "SG",
              "shortName": "I. Okoro"
            },
            "position": 9,
            "stats": [
              {
                "typeId": 7,
                "value": "6.4"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 86035,
              "imageVersion": 13,
              "name": "Lamar Stevens",
              "nameForURL": "lamar-stevens",
              "positionName": "Power Forward",
              "positionShortName": "PF",
              "shortName": "L. Stevens"
            },
            "position": 10,
            "stats": [
              {
                "typeId": 7,
                "value": "5.3"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 2,
              "id": 53570,
              "imageVersion": 36,
              "name": "Ricky Rubio",
              "nameForURL": "ricky-rubio",
              "positionName": "Point Guard",
              "positionShortName": "PG",
              "shortName": "R. Rubio"
            },
            "position": 11,
            "stats": [
              {
                "typeId": 7,
                "value": "5.2"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 86053,
              "imageVersion": 9,
              "name": "Sam Merrill",
              "nameForURL": "sam-merrill",
              "positionName": "Point Guard",
              "positionShortName": "PG",
              "shortName": "S. Merrill"
            },
            "position": 12,
            "stats": [
              {
                "typeId": 7,
                "value": "5.0"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 71454,
              "imageVersion": 19,
              "name": "Dean Wade",
              "nameForURL": "dean-wade",
              "positionName": "Power Forward",
              "positionShortName": "PF",
              "shortName": "D. Wade"
            },
            "position": 13,
            "stats": [
              {
                "typeId": 7,
                "value": "4.7"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 21,
              "id": 53580,
              "imageVersion": 17,
              "name": "Raul Neto",
              "nameForURL": "raul-neto",
              "positionName": "Point Guard",
              "positionShortName": "PG",
              "shortName": "R. Neto"
            },
            "position": 14,
            "stats": [
              {
                "typeId": 7,
                "value": "3.3"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 53466,
              "imageVersion": 20,
              "name": "Robin Lopez",
              "nameForURL": "robin-lopez",
              "positionName": "Center",
              "positionShortName": "C",
              "shortName": "R. Lopez"
            },
            "position": 15,
            "stats": [
              {
                "typeId": 7,
                "value": "3.0"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 69,
              "id": 86054,
              "imageVersion": 13,
              "name": "Mamadi Diakite",
              "nameForURL": "mamadi-diakite",
              "positionName": "Power Forward",
              "positionShortName": "PF",
              "shortName": "M. Diakite"
            },
            "position": 16,
            "stats": [
              {
                "typeId": 7,
                "value": "2.6"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 90115,
              "imageVersion": 32,
              "name": "Isaiah Mobley",
              "nameForURL": "isaiah-mobley",
              "positionName": "Power Forward",
              "positionShortName": "PF",
              "shortName": "I. Mobley"
            },
            "position": 17,
            "stats": [
              {
                "typeId": 7,
                "value": "2.6"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 71337,
              "imageVersion": 13,
              "name": "Dylan Windler",
              "nameForURL": "dylan-windler",
              "positionName": "Shooting Guard",
              "positionShortName": "SG",
              "shortName": "D. Windler"
            },
            "position": 18,
            "stats": [
              {
                "typeId": 7,
                "value": "1.7"
              }
            ]
          }
        ],
        "statsTypes": [
          {
            "name": "Points",
            "typeId": 7
          }
        ]
      },
      {
        "competitionId": 103,
        "id": 2,
        "name": "Assists",
        "rows": [
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 71382,
              "imageVersion": 17,
              "name": "Darius Garland",
              "nameForURL": "darius-garland",
              "positionName": "Point Guard",
              "positionShortName": "PG",
              "shortName": "D. Garland"
            },
            "position": 1,
            "stats": [
              {
                "typeId": 5,
                "value": "7.8"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 53571,
              "imageVersion": 18,
              "name": "Donovan Mitchell",
              "nameForURL": "donovan-mitchell",
              "positionName": "Shooting Guard",
              "positionShortName": "SG",
              "shortName": "D. Mitchell"
            },
            "position": 2,
            "stats": [
              {
                "typeId": 5,
                "value": "4.4"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 53443,
              "imageVersion": 26,
              "name": "Caris LeVert",
              "nameForURL": "caris-levert",
              "positionName": "Shooting Guard",
              "positionShortName": "SG",
              "shortName": "C. LeVert"
            },
            "position": 3,
            "stats": [
              {
                "typeId": 5,
                "value": "3.9"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 2,
              "id": 53570,
              "imageVersion": 36,
              "name": "Ricky Rubio",
              "nameForURL": "ricky-rubio",
              "positionName": "Point Guard",
              "positionShortName": "PG",
              "shortName": "R. Rubio"
            },
            "position": 4,
            "stats": [
              {
                "typeId": 5,
                "value": "3.5"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 90121,
              "imageVersion": 14,
              "name": "Evan Mobley",
              "nameForURL": "evan-mobley",
              "positionName": "Center",
              "positionShortName": "C",
              "shortName": "E. Mobley"
            },
            "position": 5,
            "stats": [
              {
                "typeId": 5,
                "value": "2.8"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1314,
              "countryId": 18,
              "id": 53360,
              "imageVersion": 23,
              "isLeftClub": true,
              "name": "Kevin Love",
              "nameForURL": "kevin-love",
              "positionName": "Power Forward",
              "positionShortName": "PF",
              "shortName": "K. Love"
            },
            "position": 6,
            "stats": [
              {
                "typeId": 5,
                "value": "1.9"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 53436,
              "imageVersion": 26,
              "name": "Jarrett Allen",
              "nameForURL": "jarrett-allen",
              "positionName": "Center",
              "positionShortName": "C",
              "shortName": "J. Allen"
            },
            "position": 7,
            "stats": [
              {
                "typeId": 5,
                "value": "1.7"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 21,
              "id": 53580,
              "imageVersion": 17,
              "name": "Raul Neto",
              "nameForURL": "raul-neto",
              "positionName": "Point Guard",
              "positionShortName": "PG",
              "shortName": "R. Neto"
            },
            "position": 8,
            "stats": [
              {
                "typeId": 5,
                "value": "1.6"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 12,
              "id": 53361,
              "imageVersion": 22,
              "name": "Cedi Osman",
              "nameForURL": "cedi-osman",
              "positionName": "Small Forward",
              "positionShortName": "SF",
              "shortName": "C. Osman"
            },
            "position": 9,
            "stats": [
              {
                "typeId": 5,
                "value": "1.5"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 86033,
              "imageVersion": 16,
              "name": "Isaac Okoro",
              "nameForURL": "isaac-okoro",
              "positionName": "Shooting Guard",
              "positionShortName": "SG",
              "shortName": "I. Okoro"
            },
            "position": 10,
            "stats": [
              {
                "typeId": 5,
                "value": "1.1"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 86053,
              "imageVersion": 9,
              "name": "Sam Merrill",
              "nameForURL": "sam-merrill",
              "positionName": "Point Guard",
              "positionShortName": "PG",
              "shortName": "S. Merrill"
            },
            "position": 11,
            "stats": [
              {
                "typeId": 5,
                "value": "1.0"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 71454,
              "imageVersion": 19,
              "name": "Dean Wade",
              "nameForURL": "dean-wade",
              "positionName": "Power Forward",
              "positionShortName": "PF",
              "shortName": "D. Wade"
            },
            "position": 12,
            "stats": [
              {
                "typeId": 5,
                "value": "0.8"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 53543,
              "imageVersion": 39,
              "name": "Danny Green",
              "nameForURL": "danny-green",
              "positionName": "Shooting Guard",
              "positionShortName": "SG",
              "shortName": "D. Green"
            },
            "position": 13,
            "stats": [
              {
                "typeId": 5,
                "value": "0.5"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 53466,
              "imageVersion": 20,
              "name": "Robin Lopez",
              "nameForURL": "robin-lopez",
              "positionName": "Center",
              "positionShortName": "C",
              "shortName": "R. Lopez"
            },
            "position": 14,
            "stats": [
              {
                "typeId": 5,
                "value": "0.5"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 86035,
              "imageVersion": 13,
              "name": "Lamar Stevens",
              "nameForURL": "lamar-stevens",
              "positionName": "Power Forward",
              "positionShortName": "PF",
              "shortName": "L. Stevens"
            },
            "position": 15,
            "stats": [
              {
                "typeId": 5,
                "value": "0.5"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 69,
              "id": 86054,
              "imageVersion": 13,
              "name": "Mamadi Diakite",
              "nameForURL": "mamadi-diakite",
              "positionName": "Power Forward",
              "positionShortName": "PF",
              "shortName": "M. Diakite"
            },
            "position": 16,
            "stats": [
              {
                "typeId": 5,
                "value": "0.4"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 71337,
              "imageVersion": 13,
              "name": "Dylan Windler",
              "nameForURL": "dylan-windler",
              "positionName": "Shooting Guard",
              "positionShortName": "SG",
              "shortName": "D. Windler"
            },
            "position": 17,
            "stats": [
              {
                "typeId": 5,
                "value": "0.3"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 90115,
              "imageVersion": 32,
              "name": "Isaiah Mobley",
              "nameForURL": "isaiah-mobley",
              "positionName": "Power Forward",
              "positionShortName": "PF",
              "shortName": "I. Mobley"
            },
            "position": 18,
            "stats": [
              {
                "typeId": 5,
                "value": "0.3"
              }
            ]
          }
        ],
        "statsTypes": [
          {
            "name": "Assists",
            "typeId": 5
          }
        ]
      },
      {
        "competitionId": 103,
        "id": 3,
        "name": "Rebounds",
        "rows": [
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 53436,
              "imageVersion": 26,
              "name": "Jarrett Allen",
              "nameForURL": "jarrett-allen",
              "positionName": "Center",
              "positionShortName": "C",
              "shortName": "J. Allen"
            },
            "position": 1,
            "stats": [
              {
                "typeId": 3,
                "value": "9.8"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 90121,
              "imageVersion": 14,
              "name": "Evan Mobley",
              "nameForURL": "evan-mobley",
              "positionName": "Center",
              "positionShortName": "C",
              "shortName": "E. Mobley"
            },
            "position": 2,
            "stats": [
              {
                "typeId": 3,
                "value": "9.0"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1314,
              "countryId": 18,
              "id": 53360,
              "imageVersion": 23,
              "isLeftClub": true,
              "name": "Kevin Love",
              "nameForURL": "kevin-love",
              "positionName": "Power Forward",
              "positionShortName": "PF",
              "shortName": "K. Love"
            },
            "position": 3,
            "stats": [
              {
                "typeId": 3,
                "value": "6.8"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 53571,
              "imageVersion": 18,
              "name": "Donovan Mitchell",
              "nameForURL": "donovan-mitchell",
              "positionName": "Shooting Guard",
              "positionShortName": "SG",
              "shortName": "D. Mitchell"
            },
            "position": 4,
            "stats": [
              {
                "typeId": 3,
                "value": "4.3"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 53443,
              "imageVersion": 26,
              "name": "Caris LeVert",
              "nameForURL": "caris-levert",
              "positionName": "Shooting Guard",
              "positionShortName": "SG",
              "shortName": "C. LeVert"
            },
            "position": 5,
            "stats": [
              {
                "typeId": 3,
                "value": "3.8"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 71454,
              "imageVersion": 19,
              "name": "Dean Wade",
              "nameForURL": "dean-wade",
              "positionName": "Power Forward",
              "positionShortName": "PF",
              "shortName": "D. Wade"
            },
            "position": 6,
            "stats": [
              {
                "typeId": 3,
                "value": "3.4"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 86035,
              "imageVersion": 13,
              "name": "Lamar Stevens",
              "nameForURL": "lamar-stevens",
              "positionName": "Power Forward",
              "positionShortName": "PF",
              "shortName": "L. Stevens"
            },
            "position": 7,
            "stats": [
              {
                "typeId": 3,
                "value": "3.3"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 71382,
              "imageVersion": 17,
              "name": "Darius Garland",
              "nameForURL": "darius-garland",
              "positionName": "Point Guard",
              "positionShortName": "PG",
              "shortName": "D. Garland"
            },
            "position": 8,
            "stats": [
              {
                "typeId": 3,
                "value": "2.7"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 86033,
              "imageVersion": 16,
              "name": "Isaac Okoro",
              "nameForURL": "isaac-okoro",
              "positionName": "Shooting Guard",
              "positionShortName": "SG",
              "shortName": "I. Okoro"
            },
            "position": 9,
            "stats": [
              {
                "typeId": 3,
                "value": "2.5"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 12,
              "id": 53361,
              "imageVersion": 22,
              "name": "Cedi Osman",
              "nameForURL": "cedi-osman",
              "positionName": "Small Forward",
              "positionShortName": "SF",
              "shortName": "C. Osman"
            },
            "position": 10,
            "stats": [
              {
                "typeId": 3,
                "value": "2.3"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 2,
              "id": 53570,
              "imageVersion": 36,
              "name": "Ricky Rubio",
              "nameForURL": "ricky-rubio",
              "positionName": "Point Guard",
              "positionShortName": "PG",
              "shortName": "R. Rubio"
            },
            "position": 11,
            "stats": [
              {
                "typeId": 3,
                "value": "2.1"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 86053,
              "imageVersion": 9,
              "name": "Sam Merrill",
              "nameForURL": "sam-merrill",
              "positionName": "Point Guard",
              "positionShortName": "PG",
              "shortName": "S. Merrill"
            },
            "position": 12,
            "stats": [
              {
                "typeId": 3,
                "value": "1.8"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 90115,
              "imageVersion": 32,
              "name": "Isaiah Mobley",
              "nameForURL": "isaiah-mobley",
              "positionName": "Power Forward",
              "positionShortName": "PF",
              "shortName": "I. Mobley"
            },
            "position": 13,
            "stats": [
              {
                "typeId": 3,
                "value": "1.7"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 53466,
              "imageVersion": 20,
              "name": "Robin Lopez",
              "nameForURL": "robin-lopez",
              "positionName": "Center",
              "positionShortName": "C",
              "shortName": "R. Lopez"
            },
            "position": 14,
            "stats": [
              {
                "typeId": 3,
                "value": "1.4"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 69,
              "id": 86054,
              "imageVersion": 13,
              "name": "Mamadi Diakite",
              "nameForURL": "mamadi-diakite",
              "positionName": "Power Forward",
              "positionShortName": "PF",
              "shortName": "M. Diakite"
            },
            "position": 15,
            "stats": [
              {
                "typeId": 3,
                "value": "1.4"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 53543,
              "imageVersion": 39,
              "name": "Danny Green",
              "nameForURL": "danny-green",
              "positionName": "Shooting Guard",
              "positionShortName": "SG",
              "shortName": "D. Green"
            },
            "position": 16,
            "stats": [
              {
                "typeId": 3,
                "value": "1.3"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 21,
              "id": 53580,
              "imageVersion": 17,
              "name": "Raul Neto",
              "nameForURL": "raul-neto",
              "positionName": "Point Guard",
              "positionShortName": "PG",
              "shortName": "R. Neto"
            },
            "position": 17,
            "stats": [
              {
                "typeId": 3,
                "value": "1.0"
              }
            ]
          }
        ],
        "statsTypes": [
          {
            "name": "Rebounds",
            "typeId": 3
          }
        ]
      },
      {
        "competitionId": 103,
        "id": 4,
        "name": "Steals",
        "rows": [
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 53571,
              "imageVersion": 18,
              "name": "Donovan Mitchell",
              "nameForURL": "donovan-mitchell",
              "positionName": "Shooting Guard",
              "positionShortName": "SG",
              "shortName": "D. Mitchell"
            },
            "position": 1,
            "stats": [
              {
                "typeId": 9,
                "value": "1.5"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 71382,
              "imageVersion": 17,
              "name": "Darius Garland",
              "nameForURL": "darius-garland",
              "positionName": "Point Guard",
              "positionShortName": "PG",
              "shortName": "D. Garland"
            },
            "position": 2,
            "stats": [
              {
                "typeId": 9,
                "value": "1.2"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 53443,
              "imageVersion": 26,
              "name": "Caris LeVert",
              "nameForURL": "caris-levert",
              "positionName": "Shooting Guard",
              "positionShortName": "SG",
              "shortName": "C. LeVert"
            },
            "position": 3,
            "stats": [
              {
                "typeId": 9,
                "value": "1.0"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 2,
              "id": 53570,
              "imageVersion": 36,
              "name": "Ricky Rubio",
              "nameForURL": "ricky-rubio",
              "positionName": "Point Guard",
              "positionShortName": "PG",
              "shortName": "R. Rubio"
            },
            "position": 4,
            "stats": [
              {
                "typeId": 9,
                "value": "0.8"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 53436,
              "imageVersion": 26,
              "name": "Jarrett Allen",
              "nameForURL": "jarrett-allen",
              "positionName": "Center",
              "positionShortName": "C",
              "shortName": "J. Allen"
            },
            "position": 5,
            "stats": [
              {
                "typeId": 9,
                "value": "0.8"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 86053,
              "imageVersion": 9,
              "name": "Sam Merrill",
              "nameForURL": "sam-merrill",
              "positionName": "Point Guard",
              "positionShortName": "PG",
              "shortName": "S. Merrill"
            },
            "position": 6,
            "stats": [
              {
                "typeId": 9,
                "value": "0.8"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 90121,
              "imageVersion": 14,
              "name": "Evan Mobley",
              "nameForURL": "evan-mobley",
              "positionName": "Center",
              "positionShortName": "C",
              "shortName": "E. Mobley"
            },
            "position": 7,
            "stats": [
              {
                "typeId": 9,
                "value": "0.8"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 86033,
              "imageVersion": 16,
              "name": "Isaac Okoro",
              "nameForURL": "isaac-okoro",
              "positionName": "Shooting Guard",
              "positionShortName": "SG",
              "shortName": "I. Okoro"
            },
            "position": 8,
            "stats": [
              {
                "typeId": 9,
                "value": "0.7"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 53543,
              "imageVersion": 39,
              "name": "Danny Green",
              "nameForURL": "danny-green",
              "positionName": "Shooting Guard",
              "positionShortName": "SG",
              "shortName": "D. Green"
            },
            "position": 9,
            "stats": [
              {
                "typeId": 9,
                "value": "0.6"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 71454,
              "imageVersion": 19,
              "name": "Dean Wade",
              "nameForURL": "dean-wade",
              "positionName": "Power Forward",
              "positionShortName": "PF",
              "shortName": "D. Wade"
            },
            "position": 10,
            "stats": [
              {
                "typeId": 9,
                "value": "0.6"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 12,
              "id": 53361,
              "imageVersion": 22,
              "name": "Cedi Osman",
              "nameForURL": "cedi-osman",
              "positionName": "Small Forward",
              "positionShortName": "SF",
              "shortName": "C. Osman"
            },
            "position": 11,
            "stats": [
              {
                "typeId": 9,
                "value": "0.5"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 21,
              "id": 53580,
              "imageVersion": 17,
              "name": "Raul Neto",
              "nameForURL": "raul-neto",
              "positionName": "Point Guard",
              "positionShortName": "PG",
              "shortName": "R. Neto"
            },
            "position": 12,
            "stats": [
              {
                "typeId": 9,
                "value": "0.4"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 86035,
              "imageVersion": 13,
              "name": "Lamar Stevens",
              "nameForURL": "lamar-stevens",
              "positionName": "Power Forward",
              "positionShortName": "PF",
              "shortName": "L. Stevens"
            },
            "position": 13,
            "stats": [
              {
                "typeId": 9,
                "value": "0.4"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 71337,
              "imageVersion": 13,
              "name": "Dylan Windler",
              "nameForURL": "dylan-windler",
              "positionName": "Shooting Guard",
              "positionShortName": "SG",
              "shortName": "D. Windler"
            },
            "position": 14,
            "stats": [
              {
                "typeId": 9,
                "value": "0.3"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 90115,
              "imageVersion": 32,
              "name": "Isaiah Mobley",
              "nameForURL": "isaiah-mobley",
              "positionName": "Power Forward",
              "positionShortName": "PF",
              "shortName": "I. Mobley"
            },
            "position": 15,
            "stats": [
              {
                "typeId": 9,
                "value": "0.3"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1314,
              "countryId": 18,
              "id": 53360,
              "imageVersion": 23,
              "isLeftClub": true,
              "name": "Kevin Love",
              "nameForURL": "kevin-love",
              "positionName": "Power Forward",
              "positionShortName": "PF",
              "shortName": "K. Love"
            },
            "position": 16,
            "stats": [
              {
                "typeId": 9,
                "value": "0.2"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 69,
              "id": 86054,
              "imageVersion": 13,
              "name": "Mamadi Diakite",
              "nameForURL": "mamadi-diakite",
              "positionName": "Power Forward",
              "positionShortName": "PF",
              "shortName": "M. Diakite"
            },
            "position": 17,
            "stats": [
              {
                "typeId": 9,
                "value": "0.2"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 53466,
              "imageVersion": 20,
              "name": "Robin Lopez",
              "nameForURL": "robin-lopez",
              "positionName": "Center",
              "positionShortName": "C",
              "shortName": "R. Lopez"
            },
            "position": 18,
            "stats": [
              {
                "typeId": 9,
                "value": "0.1"
              }
            ]
          }
        ],
        "statsTypes": [
          {
            "name": "Steals per game",
            "typeId": 9
          }
        ]
      },
      {
        "competitionId": 103,
        "id": 5,
        "name": "Turnovers",
        "rows": [
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 71382,
              "imageVersion": 17,
              "name": "Darius Garland",
              "nameForURL": "darius-garland",
              "positionName": "Point Guard",
              "positionShortName": "PG",
              "shortName": "D. Garland"
            },
            "position": 1,
            "stats": [
              {
                "typeId": 11,
                "value": "2.9"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 53571,
              "imageVersion": 18,
              "name": "Donovan Mitchell",
              "nameForURL": "donovan-mitchell",
              "positionName": "Shooting Guard",
              "positionShortName": "SG",
              "shortName": "D. Mitchell"
            },
            "position": 2,
            "stats": [
              {
                "typeId": 11,
                "value": "2.6"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 90121,
              "imageVersion": 14,
              "name": "Evan Mobley",
              "nameForURL": "evan-mobley",
              "positionName": "Center",
              "positionShortName": "C",
              "shortName": "E. Mobley"
            },
            "position": 3,
            "stats": [
              {
                "typeId": 11,
                "value": "1.8"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 53443,
              "imageVersion": 26,
              "name": "Caris LeVert",
              "nameForURL": "caris-levert",
              "positionName": "Shooting Guard",
              "positionShortName": "SG",
              "shortName": "C. LeVert"
            },
            "position": 4,
            "stats": [
              {
                "typeId": 11,
                "value": "1.6"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 53436,
              "imageVersion": 26,
              "name": "Jarrett Allen",
              "nameForURL": "jarrett-allen",
              "positionName": "Center",
              "positionShortName": "C",
              "shortName": "J. Allen"
            },
            "position": 5,
            "stats": [
              {
                "typeId": 11,
                "value": "1.4"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1314,
              "countryId": 18,
              "id": 53360,
              "imageVersion": 23,
              "isLeftClub": true,
              "name": "Kevin Love",
              "nameForURL": "kevin-love",
              "positionName": "Power Forward",
              "positionShortName": "PF",
              "shortName": "K. Love"
            },
            "position": 6,
            "stats": [
              {
                "typeId": 11,
                "value": "1.1"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 53543,
              "imageVersion": 39,
              "name": "Danny Green",
              "nameForURL": "danny-green",
              "positionName": "Shooting Guard",
              "positionShortName": "SG",
              "shortName": "D. Green"
            },
            "position": 7,
            "stats": [
              {
                "typeId": 11,
                "value": "0.9"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 2,
              "id": 53570,
              "imageVersion": 36,
              "name": "Ricky Rubio",
              "nameForURL": "ricky-rubio",
              "positionName": "Point Guard",
              "positionShortName": "PG",
              "shortName": "R. Rubio"
            },
            "position": 8,
            "stats": [
              {
                "typeId": 11,
                "value": "0.9"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 12,
              "id": 53361,
              "imageVersion": 22,
              "name": "Cedi Osman",
              "nameForURL": "cedi-osman",
              "positionName": "Small Forward",
              "positionShortName": "SF",
              "shortName": "C. Osman"
            },
            "position": 9,
            "stats": [
              {
                "typeId": 11,
                "value": "0.7"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 53466,
              "imageVersion": 20,
              "name": "Robin Lopez",
              "nameForURL": "robin-lopez",
              "positionName": "Center",
              "positionShortName": "C",
              "shortName": "R. Lopez"
            },
            "position": 10,
            "stats": [
              {
                "typeId": 11,
                "value": "0.7"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 86033,
              "imageVersion": 16,
              "name": "Isaac Okoro",
              "nameForURL": "isaac-okoro",
              "positionName": "Shooting Guard",
              "positionShortName": "SG",
              "shortName": "I. Okoro"
            },
            "position": 11,
            "stats": [
              {
                "typeId": 11,
                "value": "0.6"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 21,
              "id": 53580,
              "imageVersion": 17,
              "name": "Raul Neto",
              "nameForURL": "raul-neto",
              "positionName": "Point Guard",
              "positionShortName": "PG",
              "shortName": "R. Neto"
            },
            "position": 12,
            "stats": [
              {
                "typeId": 11,
                "value": "0.5"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 69,
              "id": 86054,
              "imageVersion": 13,
              "name": "Mamadi Diakite",
              "nameForURL": "mamadi-diakite",
              "positionName": "Power Forward",
              "positionShortName": "PF",
              "shortName": "M. Diakite"
            },
            "position": 13,
            "stats": [
              {
                "typeId": 11,
                "value": "0.5"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 71454,
              "imageVersion": 19,
              "name": "Dean Wade",
              "nameForURL": "dean-wade",
              "positionName": "Power Forward",
              "positionShortName": "PF",
              "shortName": "D. Wade"
            },
            "position": 14,
            "stats": [
              {
                "typeId": 11,
                "value": "0.4"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 86035,
              "imageVersion": 13,
              "name": "Lamar Stevens",
              "nameForURL": "lamar-stevens",
              "positionName": "Power Forward",
              "positionShortName": "PF",
              "shortName": "L. Stevens"
            },
            "position": 15,
            "stats": [
              {
                "typeId": 11,
                "value": "0.4"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 71337,
              "imageVersion": 13,
              "name": "Dylan Windler",
              "nameForURL": "dylan-windler",
              "positionName": "Shooting Guard",
              "positionShortName": "SG",
              "shortName": "D. Windler"
            },
            "position": 16,
            "stats": [
              {
                "typeId": 11,
                "value": "0.3"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 90115,
              "imageVersion": 32,
              "name": "Isaiah Mobley",
              "nameForURL": "isaiah-mobley",
              "positionName": "Power Forward",
              "positionShortName": "PF",
              "shortName": "I. Mobley"
            },
            "position": 17,
            "stats": [
              {
                "typeId": 11,
                "value": "0.1"
              }
            ]
          }
        ],
        "statsTypes": [
          {
            "name": "Turnovers per game",
            "typeId": 11
          }
        ]
      },
      {
        "competitionId": 103,
        "id": 6,
        "name": "Blocks",
        "rows": [
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 90121,
              "imageVersion": 14,
              "name": "Evan Mobley",
              "nameForURL": "evan-mobley",
              "positionName": "Center",
              "positionShortName": "C",
              "shortName": "E. Mobley"
            },
            "position": 1,
            "stats": [
              {
                "typeId": 13,
                "value": "1.5"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 53436,
              "imageVersion": 26,
              "name": "Jarrett Allen",
              "nameForURL": "jarrett-allen",
              "positionName": "Center",
              "positionShortName": "C",
              "shortName": "J. Allen"
            },
            "position": 2,
            "stats": [
              {
                "typeId": 13,
                "value": "1.2"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 71454,
              "imageVersion": 19,
              "name": "Dean Wade",
              "nameForURL": "dean-wade",
              "positionName": "Power Forward",
              "positionShortName": "PF",
              "shortName": "D. Wade"
            },
            "position": 3,
            "stats": [
              {
                "typeId": 13,
                "value": "0.5"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 53543,
              "imageVersion": 39,
              "name": "Danny Green",
              "nameForURL": "danny-green",
              "positionName": "Shooting Guard",
              "positionShortName": "SG",
              "shortName": "D. Green"
            },
            "position": 4,
            "stats": [
              {
                "typeId": 13,
                "value": "0.4"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 53571,
              "imageVersion": 18,
              "name": "Donovan Mitchell",
              "nameForURL": "donovan-mitchell",
              "positionName": "Shooting Guard",
              "positionShortName": "SG",
              "shortName": "D. Mitchell"
            },
            "position": 5,
            "stats": [
              {
                "typeId": 13,
                "value": "0.4"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 86033,
              "imageVersion": 16,
              "name": "Isaac Okoro",
              "nameForURL": "isaac-okoro",
              "positionName": "Shooting Guard",
              "positionShortName": "SG",
              "shortName": "I. Okoro"
            },
            "position": 6,
            "stats": [
              {
                "typeId": 13,
                "value": "0.4"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 69,
              "id": 86054,
              "imageVersion": 13,
              "name": "Mamadi Diakite",
              "nameForURL": "mamadi-diakite",
              "positionName": "Power Forward",
              "positionShortName": "PF",
              "shortName": "M. Diakite"
            },
            "position": 7,
            "stats": [
              {
                "typeId": 13,
                "value": "0.4"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 53443,
              "imageVersion": 26,
              "name": "Caris LeVert",
              "nameForURL": "caris-levert",
              "positionName": "Shooting Guard",
              "positionShortName": "SG",
              "shortName": "C. LeVert"
            },
            "position": 8,
            "stats": [
              {
                "typeId": 13,
                "value": "0.3"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 86035,
              "imageVersion": 13,
              "name": "Lamar Stevens",
              "nameForURL": "lamar-stevens",
              "positionName": "Power Forward",
              "positionShortName": "PF",
              "shortName": "L. Stevens"
            },
            "position": 9,
            "stats": [
              {
                "typeId": 13,
                "value": "0.3"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 90115,
              "imageVersion": 32,
              "name": "Isaiah Mobley",
              "nameForURL": "isaiah-mobley",
              "positionName": "Power Forward",
              "positionShortName": "PF",
              "shortName": "I. Mobley"
            },
            "position": 10,
            "stats": [
              {
                "typeId": 13,
                "value": "0.3"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 2,
              "id": 53570,
              "imageVersion": 36,
              "name": "Ricky Rubio",
              "nameForURL": "ricky-rubio",
              "positionName": "Point Guard",
              "positionShortName": "PG",
              "shortName": "R. Rubio"
            },
            "position": 11,
            "stats": [
              {
                "typeId": 13,
                "value": "0.2"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 53466,
              "imageVersion": 20,
              "name": "Robin Lopez",
              "nameForURL": "robin-lopez",
              "positionName": "Center",
              "positionShortName": "C",
              "shortName": "R. Lopez"
            },
            "position": 12,
            "stats": [
              {
                "typeId": 13,
                "value": "0.2"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1314,
              "countryId": 18,
              "id": 53360,
              "imageVersion": 23,
              "isLeftClub": true,
              "name": "Kevin Love",
              "nameForURL": "kevin-love",
              "positionName": "Power Forward",
              "positionShortName": "PF",
              "shortName": "K. Love"
            },
            "position": 13,
            "stats": [
              {
                "typeId": 13,
                "value": "0.1"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 12,
              "id": 53361,
              "imageVersion": 22,
              "name": "Cedi Osman",
              "nameForURL": "cedi-osman",
              "positionName": "Small Forward",
              "positionShortName": "SF",
              "shortName": "C. Osman"
            },
            "position": 14,
            "stats": [
              {
                "typeId": 13,
                "value": "0.1"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 21,
              "id": 53580,
              "imageVersion": 17,
              "name": "Raul Neto",
              "nameForURL": "raul-neto",
              "positionName": "Point Guard",
              "positionShortName": "PG",
              "shortName": "R. Neto"
            },
            "position": 15,
            "stats": [
              {
                "typeId": 13,
                "value": "0.1"
              }
            ]
          },
          {
            "entity": {
              "competitionId": 0,
              "competitorId": 1303,
              "countryId": 18,
              "id": 71382,
              "imageVersion": 17,
              "name": "Darius Garland",
              "nameForURL": "darius-garland",
              "positionName": "Point Guard",
              "positionShortName": "PG",
              "shortName": "D. Garland"
            },
            "position": 16,
            "stats": [
              {
                "typeId": 13,
                "value": "0.1"
              }
            ]
          }
        ],
        "statsTypes": [
          {
            "name": "Blocks per game",
            "typeId": 13
          }
        ]
      }
    ]
  }

