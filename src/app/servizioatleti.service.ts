import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioatletiService {

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
      "popularityRank": 12483959,
      "sportId": 2
    },
    {
      "competitorsType": 1,
      "countryId": 18,
      "currentSeasonNum": -1,
      "currentStageType": -1,
      "hasBrackets": false,
      "hasStandings": false,
      "hasStats": false,
      "id": 7244,
      "imageVersion": 6,
      "name": "NBA Summer League",
      "nameForURL": "nba-summer-league",
      "popularityRank": 113948,
      "sportId": 2
    },
    {
      "competitorsType": 1,
      "countryId": 54,
      "currentSeasonNum": -1,
      "currentStageType": -1,
      "hasBrackets": false,
      "hasStandings": false,
      "hasStats": false,
      "id": 7271,
      "imageVersion": 1,
      "name": "Club Friendlies",
      "nameForURL": "club-friendlies",
      "popularityRank": 12740,
      "sportId": 2
    },
    {
      "competitorsType": 2,
      "countryId": 54,
      "currentSeasonNum": -1,
      "currentStageType": -1,
      "hasBrackets": false,
      "hasStandings": false,
      "hasStats": false,
      "id": 338,
      "imageVersion": 1,
      "name": "International Friendlies",
      "nameForURL": "international-friendlies",
      "popularityRank": 229998,
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
      "popularityRank": 1587,
      "shortName": "Cavaliers",
      "sportId": 2,
      "symbolicName": "CLE",
      "type": 1
    }
  ]
  "countries": [
    {
      "id": 353,
      "imageVersion": 2,
      "name": "Ohio (USA)",
      "nameForURL": "ohio-(usa)"
    },
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
      "id": 54,
      "imageVersion": 1,
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
      ]
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
  //"squads": [
    //{
      athletes: any = [
        {
          "age": 28,
          "birthdate": "1995-04-08T00:00:00+00:00",
          "clubId": 1303,
          "formationPosition": {
            "id": 20,
            "name": "Small Forward",
            "order": 20,
            "shortName": "SF"
          },
          "gender": 1,
          "height": 201,
          "id": 53361,
          "imageVersion": 22,
          "jerseyNum": 16,
          "name": "Cedi Osman",
          "nameForURL": "cedi-osman",
          "nationalTeamId": 1732,
          "nationalityId": 12,
          "position": {
            "id": 7,
            "name": "Forward",
            "shortName": "F"
          },
          "shortName": "C. Osman",
          "sportId": 2
        },
        {
          "age": 25,
          "birthdate": "1998-04-21T00:00:00+00:00",
          "clubId": 1303,
          "formationPosition": {
            "id": 22,
            "name": "Center",
            "order": 22,
            "shortName": "C"
          },
          "gender": 1,
          "height": 211,
          "id": 53436,
          "imageVersion": 26,
          "jerseyNum": 31,
          "name": "Jarrett Allen",
          "nameForURL": "jarrett-allen",
          "nationalTeamId": 2397,
          "nationalityId": 18,
          "position": {
            "id": 8,
            "name": "Center",
            "shortName": "C"
          },
          "shortName": "J. Allen",
          "sportId": 2
        },
        {
          "age": 28,
          "birthdate": "1994-08-25T00:00:00+00:00",
          "clubId": 1303,
          "formationPosition": {
            "id": 19,
            "name": "Shooting Guard",
            "order": 19,
            "shortName": "SG"
          },
          "gender": 1,
          "height": 201,
          "id": 53443,
          "imageVersion": 26,
          "jerseyNum": 3,
          "name": "Caris LeVert",
          "nameForURL": "caris-levert",
          "nationalTeamId": 2397,
          "nationalityId": 18,
          "position": {
            "id": 6,
            "name": "Guard",
            "shortName": "G"
          },
          "shortName": "C. LeVert",
          "sportId": 2
        },
        {
          "age": 35,
          "birthdate": "1988-04-01T00:00:00+00:00",
          "clubId": 1303,
          "formationPosition": {
            "id": 22,
            "name": "Center",
            "order": 22,
            "shortName": "C"
          },
          "gender": 1,
          "height": 213,
          "id": 53466,
          "imageVersion": 20,
          "jerseyNum": 33,
          "name": "Robin Lopez",
          "nameForURL": "robin-lopez",
          "nationalTeamId": 2397,
          "nationalityId": 18,
          "position": {
            "id": 8,
            "name": "Center",
            "shortName": "C"
          },
          "shortName": "R. Lopez",
          "sportId": 2
        },
        {
          "age": 35,
          "birthdate": "1987-06-22T00:00:00+00:00",
          "clubId": 1303,
          "formationPosition": {
            "id": 19,
            "name": "Shooting Guard",
            "order": 19,
            "shortName": "SG"
          },
          "gender": 1,
          "height": 198,
          "id": 53543,
          "imageVersion": 39,
          "jerseyNum": 14,
          "name": "Danny Green",
          "nameForURL": "danny-green",
          "nationalTeamId": 2397,
          "nationalityId": 18,
          "position": {
            "id": 6,
            "name": "Guard",
            "shortName": "G"
          },
          "shortName": "D. Green",
          "sportId": 2
        },
        {
          "age": 32,
          "birthdate": "1990-10-21T00:00:00+00:00",
          "clubId": 1303,
          "formationPosition": {
            "id": 18,
            "name": "Point Guard",
            "order": 18,
            "shortName": "PG"
          },
          "gender": 1,
          "height": 191,
          "id": 53570,
          "imageVersion": 36,
          "jerseyNum": 13,
          "name": "Ricky Rubio",
          "nameForURL": "ricky-rubio",
          "nationalTeamId": 2393,
          "nationalityId": 2,
          "position": {
            "id": 6,
            "name": "Guard",
            "shortName": "G"
          },
          "shortName": "R. Rubio",
          "sportId": 2
        },
        {
          "age": 26,
          "birthdate": "1996-09-07T00:00:00+00:00",
          "clubId": 1303,
          "formationPosition": {
            "id": 19,
            "name": "Shooting Guard",
            "order": 19,
            "shortName": "SG"
          },
          "gender": 1,
          "height": 185,
          "id": 53571,
          "imageVersion": 18,
          "jerseyNum": 45,
          "name": "Donovan Mitchell",
          "nameForURL": "donovan-mitchell",
          "nationalTeamId": 2397,
          "nationalityId": 18,
          "position": {
            "id": 6,
            "name": "Guard",
            "shortName": "G"
          },
          "shortName": "D. Mitchell",
          "sportId": 2
        },
        {
          "age": 30,
          "birthdate": "1992-05-19T00:00:00+00:00",
          "clubId": 1303,
          "formationPosition": {
            "id": 18,
            "name": "Point Guard",
            "order": 18,
            "shortName": "PG"
          },
          "gender": 1,
          "height": 185,
          "id": 53580,
          "imageVersion": 17,
          "jerseyNum": 19,
          "name": "Raul Neto",
          "nameForURL": "raul-neto",
          "nationalTeamId": 2353,
          "nationalityId": 21,
          "position": {
            "id": 6,
            "name": "Guard",
            "shortName": "G"
          },
          "shortName": "R. Neto",
          "sportId": 2
        },
        {
          "age": 26,
          "birthdate": "1996-09-22T00:00:00+00:00",
          "clubId": 1303,
          "formationPosition": {
            "id": 19,
            "name": "Shooting Guard",
            "order": 19,
            "shortName": "SG"
          },
          "gender": 1,
          "height": 198,
          "id": 71337,
          "imageVersion": 13,
          "jerseyNum": 9,
          "name": "Dylan Windler",
          "nameForURL": "dylan-windler",
          "nationalTeamId": 2397,
          "nationalityId": 18,
          "position": {
            "id": 6,
            "name": "Guard",
            "shortName": "G"
          },
          "shortName": "D. Windler",
          "sportId": 2
        },
        {
          "age": 23,
          "birthdate": "2000-01-26T00:00:00+00:00",
          "clubId": 1303,
          "formationPosition": {
            "id": 18,
            "name": "Point Guard",
            "order": 18,
            "shortName": "PG"
          },
          "gender": 1,
          "height": 185,
          "id": 71382,
          "imageVersion": 17,
          "jerseyNum": 10,
          "name": "Darius Garland",
          "nameForURL": "darius-garland",
          "nationalTeamId": 2397,
          "nationalityId": 18,
          "position": {
            "id": 6,
            "name": "Guard",
            "shortName": "G"
          },
          "shortName": "D. Garland",
          "sportId": 2
        },
        {
          "age": 26,
          "birthdate": "1996-11-20T00:00:00+00:00",
          "clubId": 1303,
          "formationPosition": {
            "id": 21,
            "name": "Power Forward",
            "order": 21,
            "shortName": "PF"
          },
          "gender": 1,
          "height": 206,
          "id": 71454,
          "imageVersion": 19,
          "jerseyNum": 32,
          "name": "Dean Wade",
          "nameForURL": "dean-wade",
          "nationalTeamId": 2397,
          "nationalityId": 18,
          "position": {
            "id": 7,
            "name": "Forward",
            "shortName": "F"
          },
          "shortName": "D. Wade",
          "sportId": 2
        },
        {
          "age": 44,
          "birthdate": "1979-03-10T00:00:00+00:00",
          "clubId": 1303,
          "formationPosition": {
            "id": 25,
            "name": "Coach",
            "order": 25
          },
          "gender": 1,
          "height": 0,
          "id": 79436,
          "imageVersion": 6,
          "name": "J.B. Bickerstaff",
          "nameForURL": "j.b.-bickerstaff",
          "nationalTeamId": 2397,
          "nationalityId": 18,
          "position": {
            "id": 5,
            "name": "Management"
          },
          "sportId": 2
        },
        {
          "age": 22,
          "birthdate": "2001-01-26T00:00:00+00:00",
          "clubId": 1303,
          "formationPosition": {
            "id": 19,
            "name": "Shooting Guard",
            "order": 19,
            "shortName": "SG"
          },
          "gender": 1,
          "height": 198,
          "id": 86033,
          "imageVersion": 16,
          "jerseyNum": 35,
          "name": "Isaac Okoro",
          "nameForURL": "isaac-okoro",
          "nationalTeamId": 2397,
          "nationalityId": 18,
          "position": {
            "id": 6,
            "name": "Guard",
            "shortName": "G"
          },
          "shortName": "I. Okoro",
          "sportId": 2
        },
        {
          "age": 25,
          "birthdate": "1997-07-09T00:00:00+00:00",
          "clubId": 1303,
          "formationPosition": {
            "id": 21,
            "name": "Power Forward",
            "order": 21,
            "shortName": "PF"
          },
          "gender": 1,
          "height": 203,
          "id": 86035,
          "imageVersion": 13,
          "jerseyNum": 8,
          "name": "Lamar Stevens",
          "nameForURL": "lamar-stevens",
          "nationalTeamId": 2397,
          "nationalityId": 18,
          "position": {
            "id": 7,
            "name": "Forward",
            "shortName": "F"
          },
          "shortName": "L. Stevens",
          "sportId": 2
        },
        {
          "age": 26,
          "birthdate": "1996-05-25T00:00:00+00:00",
          "clubId": 1303,
          "formationPosition": {
            "id": 18,
            "name": "Point Guard",
            "order": 18,
            "shortName": "PG"
          },
          "gender": 1,
          "height": 196,
          "id": 86053,
          "imageVersion": 9,
          "jerseyNum": 5,
          "name": "Sam Merrill",
          "nameForURL": "sam-merrill",
          "nationalTeamId": 2397,
          "nationalityId": 18,
          "position": {
            "id": 6,
            "name": "Guard",
            "shortName": "G"
          },
          "shortName": "S. Merrill",
          "sportId": 2
        },
        {
          "age": 26,
          "birthdate": "1997-01-21T00:00:00+00:00",
          "clubId": 1303,
          "formationPosition": {
            "id": 21,
            "name": "Power Forward",
            "order": 21,
            "shortName": "PF"
          },
          "gender": 1,
          "height": 206,
          "id": 86054,
          "imageVersion": 13,
          "jerseyNum": 21,
          "name": "Mamadi Diakite",
          "nameForURL": "mamadi-diakite",
          "nationalTeamId": 49049,
          "nationalityId": 69,
          "position": {
            "id": 7,
            "name": "Forward",
            "shortName": "F"
          },
          "shortName": "M. Diakite",
          "sportId": 2
        },
        {
          "age": 23,
          "birthdate": "1999-09-24T00:00:00+00:00",
          "clubId": 1303,
          "formationPosition": {
            "id": 21,
            "name": "Power Forward",
            "order": 21,
            "shortName": "PF"
          },
          "gender": 0,
          "height": 208,
          "id": 90115,
          "imageVersion": 32,
          "jerseyNum": 15,
          "name": "Isaiah Mobley",
          "nameForURL": "isaiah-mobley",
          "nationalTeamId": 2397,
          "nationalityId": 18,
          "position": {
            "id": 7,
            "name": "Forward",
            "shortName": "F"
          },
          "shortName": "I. Mobley",
          "sportId": 2
        },
        {
          "age": 21,
          "birthdate": "2001-06-18T00:00:00+00:00",
          "clubId": 1303,
          "formationPosition": {
            "id": 22,
            "name": "Center",
            "order": 22,
            "shortName": "C"
          },
          "gender": 1,
          "height": 213,
          "id": 90121,
          "imageVersion": 14,
          "jerseyNum": 4,
          "name": "Evan Mobley",
          "nameForURL": "evan-mobley",
          "nationalTeamId": 2397,
          "nationalityId": 18,
          "position": {
            "id": 8,
            "name": "Center",
            "shortName": "C"
          },
          "shortName": "E. Mobley",
          "sportId": 2
        },
        {
          "age": 24,
          "birthdate": "1999-03-22T00:00:00+00:00",
          "clubId": 1303,
          "formationPosition": {
            "id": 18,
            "name": "Point Guard",
            "order": 18,
            "shortName": "PG"
          },
          "gender": 1,
          "height": 196,
          "id": 102960,
          "imageVersion": 11,
          "jerseyNum": 5,
          "name": "RJ Nembhard",
          "nameForURL": "rj-nembhard",
          "nationalTeamId": 2397,
          "nationalityId": 18,
          "position": {
            "id": 6,
            "name": "Guard",
            "shortName": "G"
          },
          "sportId": 2
        }
      ]
      "competitorId": 1303
      "positions": [
        {
          "id": 5,
          "isStaff": true,
          "name": "Management",
          "title": "Management"
        },
        {
          "id": 6,
          "isStaff": false,
          "name": "Guard",
          "title": "Guards"
        },
        {
          "id": 7,
          "isStaff": false,
          "name": "Forward",
          "title": "Forward"
        },
        {
          "id": 8,
          "isStaff": false,
          "name": "Center",
          "title": "Centers"
        }
      ]
    }
  
//}