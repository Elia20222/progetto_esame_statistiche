import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioatletiService {
  

  constructor() { }

  getcountrie(id:number){

    for (let index = 0; index < this.Athletes.length; index ++ ) {
      var Atleta = this.Athletes[index]

      if (id == Atleta.id){
        return Atleta.name
      }


    }

    return "stato non trovato";
  }



  

Athletes = 
  [
    {
      id: 53361,
      name: "Cedi Osman",
      gender: 1,
      age: 28,
      birthdate: "1995-04-08",
      image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1626224.png",
      positions: [
        {
          "id": 6,

    },]

    },
    {
      id:53436,
      name: "Jarret Allen",
      gender: 1,
      age: 25,
      birthdate: "1994-08-25",
      positions: [
        {
          "id": 8,

    },]

    },
    
    {
      id:53443,
      name: "Carris LeVert",
      gender: 1,
      age: 25,
      birthdate: "1994-08-25",
      positions: [
        {
          "id": 6,

    },]

    },

    {
      id:53466,
      name: "Robin Lopez",
      gender: 1,
      age:35,
      birthdate: "1988-04-01",
      positions: [
        {
          "id": 8,

    },]

    },

    {
      id:53580,
      name: "Raul Neto",
      gender: 1,
      age:31,
      birthdate: "1992-05-19",
      positions: [
        {
          "id": 6,

    },]

    },


    {
      id:53570,
      name: "Ricky Rubio",
      gender: 1,
      birthdate:"1990-10-21",
      age:32,
      positions: [
        {
          "id": 6,

    },]

    },

    {
      id:53571,
      name: "Donovan Mitchel",
      gender: 1,
      birthdate:"1996-09-07",
      age:26,
      positions: [
        {
          "id": 6,

    },]

    },

    {
      id:71337,
      name: "Dylan Windler",
      gender: 1,
      birthdate:"1996-09-22",
      age:26,
      positions: [
        {
          "id": 6,

    },]

    },

    {
      id:71382,
      name: "Darius Garland",
      gender: 1,
      birthdate:"2000-01-26",
      age:23,
      positions: [
        {
          "id": 6,

    },]

    },

    {
      id:71454,
      name: "Dean Wade",
      gender: 1,
      birthdate:"1996-11-20",
      age:26,
      positions: [
        {
          "id": 7,

    },]

    },

    {
      id:79436,
      name: "J.B Bickerstaff",
      gender: 1,
      birthdate:"1979-03-10 ",
      age:44,
      positions: [
        {
          "id": 5,

    },]

    },

    {
      id:86033,
      name: "Isaac Okoro",
      gender: 1,
      birthdate:"2001-01-26",
      age:22,
      positions: [
        {
          "id": 6,

    },]

    },

    {
      id:86035,
      name: "Lamar Stevens",
      gender: 1,
      birthdate:"1997-07-09",
      age:25,
      positions: [
        {
          "id": 7,

    },]

    },

    {
      id:86053,
      name: "Sam Merrill",
      birthdate: "1996-05-25",
      gender: 1,
      age:27,
      positions: [
        {
          "id": 6,

    },]

    },

    {
      id:86054,
      name: "Mamadi Diakite",
      birthdate: "1997-01-21",
      gender: 1,
      age:26,
      positions: [
        {
          "id": 7,

    },]
      

    },

    {
      id:90115,
      name: "Isaiah Mobley",
      birthdate:"1999-09-24 ",
      gender: 1,
      age:23,
      positions: [
        {
          "id": 7,

    },]

    },
    {
      id:90121,
      name: "Evan Mobley",
      birthdate:"2001-06-18",
      gender: 1,
      age:21,
      positions: [
        {
          "id": 8,

    },]

    },

    {
      id:102960,
      name: "RJ Nembhard",
      birthdate:"1999-03-22",
      gender: 1,
      age:24,
      positions : [
        {
          "id": 6,

    },]}
  ];
  
    
  "competitions": [
    {
      "color": "#006BB7",
      "competitorsType": 1,
      "countryId": 18, //USA
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
          "birthdate": "1988-04-01",
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
          "birthdate": "1987-06-22",
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
          "birthdate": "1990-10-21",
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
          "birthdate": "1996-09-07",
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
          "birthdate": "1992-05-19",
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
          "birthdate": "1996-09-22",
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
          "birthdate": "2000-01-26",
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
          "birthdate": "1996-11-20",
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
          "birthdate": "1979-03-10",
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
          "birthdate": "2001-01-26",
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
          "birthdate": "1997-07-09",
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
          "birthdate": "1996-05-25",
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
          "birthdate": "1997-01-21",
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
          "birthdate": "1999-09-24",
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
          "birthdate": "2001-06-18",
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
          "birthdate": "1999-03-22",
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

      DatiAtleta= { 
        "athletes": [
          {
            "age": 25,
            "careerStats": {
              "seasons": [
                {
                  "key": "103_1",
                  "logoEntityID": 103,
                  "logoEntityType": "Competition",
                  "name": "NBA - Regular Season",
                  "shortName": "NBA - Regular Season",
                  "showLogo": true,
                  "stats": {
                    "tables": [
                      {
                        "columns": [
                          {
                            "entity": {
                              "id": 10,
                              "type": "AthleteStatisticType"
                            },
                            "name": "Games Played",
                            "num": 1,
                            "order": 1,
                            "shortName": "GP"
                          },
                          {
                            "entity": {
                              "id": 57,
                              "type": "AthleteStatisticType"
                            },
                            "name": "Minutes",
                            "num": 15,
                            "order": 2,
                            "shortName": "MIN"
                          },
                          {
                            "entity": {
                              "id": 15,
                              "type": "AthleteStatisticType"
                            },
                            "name": "Points",
                            "num": 7,
                            "order": 3,
                            "shortName": "PPG"
                          },
                          {
                            "entity": {
                              "id": 11,
                              "type": "AthleteStatisticType"
                            },
                            "name": "Rebounds",
                            "num": 3,
                            "order": 4,
                            "shortName": "RPG"
                          },
                          {
                            "entity": {
                              "id": 13,
                              "type": "AthleteStatisticType"
                            },
                            "name": "Assists",
                            "num": 5,
                            "order": 5,
                            "shortName": "APG"
                          },
                          {
                            "entity": {
                              "id": 17,
                              "type": "AthleteStatisticType"
                            },
                            "name": "Steals per game",
                            "num": 9,
                            "order": 6,
                            "shortName": "SPG"
                          },
                          {
                            "entity": {
                              "id": 21,
                              "type": "AthleteStatisticType"
                            },
                            "name": "Blocks per game",
                            "num": 13,
                            "order": 7,
                            "shortName": "BPG"
                          },
                          {
                            "entity": {
                              "id": 60,
                              "type": "AthleteStatisticType"
                            },
                            "name": "Field Goals Average",
                            "num": 18,
                            "order": 8,
                            "shortName": "FG%"
                          },
                          {
                            "entity": {
                              "id": 63,
                              "type": "AthleteStatisticType"
                            },
                            "name": "Three Points Average",
                            "num": 21,
                            "order": 9,
                            "shortName": "3P%"
                          },
                          {
                            "entity": {
                              "id": 66,
                              "type": "AthleteStatisticType"
                            },
                            "name": "Free Throws Average",
                            "num": 24,
                            "order": 10,
                            "shortName": "FT%"
                          },
                          {
                            "entity": {
                              "id": 68,
                              "type": "AthleteStatisticType"
                            },
                            "name": "Offensive Rebounds Average",
                            "num": 26,
                            "order": 11,
                            "shortName": "OR"
                          },
                          {
                            "entity": {
                              "id": 70,
                              "type": "AthleteStatisticType"
                            },
                            "name": "Defensive Rebounds Average",
                            "num": 28,
                            "order": 12,
                            "shortName": "DR"
                          },
                          {
                            "entity": {
                              "id": 19,
                              "type": "AthleteStatisticType"
                            },
                            "name": "Turnovers per game",
                            "num": 11,
                            "order": 13,
                            "shortName": "TO"
                          },
                          {
                            "entity": {
                              "id": 72,
                              "type": "AthleteStatisticType"
                            },
                            "name": "Personal Fouls",
                            "num": 30,
                            "order": 14,
                            "shortName": "PF"
                          }
                        ],
                        "rows": [
                          {
                            "entityId": 83,
                            "num": 1,
                            "secondaryTitle": "Cavaliers",
                            "title": "2022/2023",
                            "values": [
                              {
                                "columnNum": 1,
                                "value": "68"
                              },
                              {
                                "columnNum": 15,
                                "value": "32.6"
                              },
                              {
                                "columnNum": 7,
                                "value": "14.3"
                              },
                              {
                                "columnNum": 3,
                                "value": "9.8"
                              },
                              {
                                "columnNum": 5,
                                "value": "1.7"
                              },
                              {
                                "columnNum": 9,
                                "value": "0.8"
                              },
                              {
                                "columnNum": 13,
                                "value": "1.2"
                              },
                              {
                                "columnNum": 18,
                                "value": "64%"
                              },
                              {
                                "columnNum": 21,
                                "value": "10%"
                              },
                              {
                                "columnNum": 24,
                                "value": "73%"
                              },
                              {
                                "columnNum": 26,
                                "value": "3.2"
                              },
                              {
                                "columnNum": 28,
                                "value": "6.5"
                              },
                              {
                                "columnNum": 11,
                                "value": "1.4"
                              },
                              {
                                "columnNum": 30,
                                "value": "2.3"
                              }
                            ]
                          },
                          {
                            "entityId": 36,
                            "num": 2,
                            "secondaryTitle": "Cavaliers",
                            "title": "2021/2022",
                            "values": [
                              {
                                "columnNum": 1,
                                "value": "56"
                              },
                              {
                                "columnNum": 15,
                                "value": "32.3"
                              },
                              {
                                "columnNum": 7,
                                "value": "16.1"
                              },
                              {
                                "columnNum": 3,
                                "value": "10.8"
                              },
                              {
                                "columnNum": 5,
                                "value": "1.6"
                              },
                              {
                                "columnNum": 9,
                                "value": "0.8"
                              },
                              {
                                "columnNum": 13,
                                "value": "1.3"
                              },
                              {
                                "columnNum": 18,
                                "value": "67%"
                              },
                              {
                                "columnNum": 21,
                                "value": "10%"
                              },
                              {
                                "columnNum": 24,
                                "value": "70%"
                              },
                              {
                                "columnNum": 26,
                                "value": "3.4"
                              },
                              {
                                "columnNum": 28,
                                "value": "7.3"
                              },
                              {
                                "columnNum": 11,
                                "value": "1.7"
                              },
                              {
                                "columnNum": 30,
                                "value": "1.7"
                              }
                            ]
                          },
                          {
                            "entityId": 11,
                            "num": 3,
                            "secondaryTitle": "Cavaliers",
                            "title": "2020/2021",
                            "values": [
                              {
                                "columnNum": 1,
                                "value": "63"
                              },
                              {
                                "columnNum": 15,
                                "value": "29.6"
                              },
                              {
                                "columnNum": 7,
                                "value": "12.8"
                              },
                              {
                                "columnNum": 3,
                                "value": "10.0"
                              },
                              {
                                "columnNum": 5,
                                "value": "1.7"
                              },
                              {
                                "columnNum": 9,
                                "value": "0.5"
                              },
                              {
                                "columnNum": 13,
                                "value": "1.4"
                              },
                              {
                                "columnNum": 18,
                                "value": "-"
                              },
                              {
                                "columnNum": 21,
                                "value": "-"
                              },
                              {
                                "columnNum": 24,
                                "value": "-"
                              },
                              {
                                "columnNum": 26,
                                "value": "-"
                              },
                              {
                                "columnNum": 28,
                                "value": "-"
                              },
                              {
                                "columnNum": 11,
                                "value": "1.6"
                              },
                              {
                                "columnNum": 30,
                                "value": "-"
                              }
                            ]
                          },
                          {
                            "entityId": 10,
                            "num": 4,
                            "secondaryTitle": "Nets",
                            "title": "2019/2020",
                            "values": [
                              {
                                "columnNum": 1,
                                "value": "70"
                              },
                              {
                                "columnNum": 15,
                                "value": "26.5"
                              },
                              {
                                "columnNum": 7,
                                "value": "11.1"
                              },
                              {
                                "columnNum": 3,
                                "value": "9.6"
                              },
                              {
                                "columnNum": 5,
                                "value": "1.6"
                              },
                              {
                                "columnNum": 9,
                                "value": "0.6"
                              },
                              {
                                "columnNum": 13,
                                "value": "1.3"
                              },
                              {
                                "columnNum": 18,
                                "value": "-"
                              },
                              {
                                "columnNum": 21,
                                "value": "-"
                              },
                              {
                                "columnNum": 24,
                                "value": "-"
                              },
                              {
                                "columnNum": 26,
                                "value": "-"
                              },
                              {
                                "columnNum": 28,
                                "value": "-"
                              },
                              {
                                "columnNum": 11,
                                "value": "1.1"
                              },
                              {
                                "columnNum": 30,
                                "value": "-"
                              }
                            ]
                          },
                          {
                            "entityId": 8,
                            "num": 5,
                            "secondaryTitle": "Nets",
                            "title": "2018/2019",
                            "values": [
                              {
                                "columnNum": 1,
                                "value": "80"
                              },
                              {
                                "columnNum": 15,
                                "value": "26.2"
                              },
                              {
                                "columnNum": 7,
                                "value": "10.9"
                              },
                              {
                                "columnNum": 3,
                                "value": "8.4"
                              },
                              {
                                "columnNum": 5,
                                "value": "1.4"
                              },
                              {
                                "columnNum": 9,
                                "value": "0.5"
                              },
                              {
                                "columnNum": 13,
                                "value": "1.5"
                              },
                              {
                                "columnNum": 18,
                                "value": "-"
                              },
                              {
                                "columnNum": 21,
                                "value": "-"
                              },
                              {
                                "columnNum": 24,
                                "value": "-"
                              },
                              {
                                "columnNum": 26,
                                "value": "-"
                              },
                              {
                                "columnNum": 28,
                                "value": "-"
                              },
                              {
                                "columnNum": 11,
                                "value": "1.3"
                              },
                              {
                                "columnNum": 30,
                                "value": "-"
                              }
                            ]
                          },
                          {
                            "entityId": 7,
                            "num": 6,
                            "secondaryTitle": "Nets",
                            "title": "2017/2018",
                            "values": [
                              {
                                "columnNum": 1,
                                "value": "72"
                              },
                              {
                                "columnNum": 15,
                                "value": "20.0"
                              },
                              {
                                "columnNum": 7,
                                "value": "8.2"
                              },
                              {
                                "columnNum": 3,
                                "value": "5.4"
                              },
                              {
                                "columnNum": 5,
                                "value": "0.7"
                              },
                              {
                                "columnNum": 9,
                                "value": "0.4"
                              },
                              {
                                "columnNum": 13,
                                "value": "1.2"
                              },
                              {
                                "columnNum": 18,
                                "value": "-"
                              },
                              {
                                "columnNum": 21,
                                "value": "-"
                              },
                              {
                                "columnNum": 24,
                                "value": "-"
                              },
                              {
                                "columnNum": 26,
                                "value": "-"
                              },
                              {
                                "columnNum": 28,
                                "value": "-"
                              },
                              {
                                "columnNum": 11,
                                "value": "1.1"
                              },
                              {
                                "columnNum": 30,
                                "value": "-"
                              }
                            ]
                          }
                        ],
                        "showColumnIcons": false,
                        "summary": [
                          {
                            "title": "Total",
                            "values": [
                              {
                                "columnNum": 1,
                                "value": "409"
                              },
                              {
                                "columnNum": 15,
                                "value": "27.6"
                              },
                              {
                                "columnNum": 7,
                                "value": "12.0"
                              },
                              {
                                "columnNum": 3,
                                "value": "8.9"
                              },
                              {
                                "columnNum": 5,
                                "value": "1.4"
                              },
                              {
                                "columnNum": 9,
                                "value": "0.6"
                              },
                              {
                                "columnNum": 13,
                                "value": "1.3"
                              },
                              {
                                "columnNum": 18,
                                "value": "65%"
                              },
                              {
                                "columnNum": 21,
                                "value": "10%"
                              },
                              {
                                "columnNum": 24,
                                "value": "71%"
                              },
                              {
                                "columnNum": 26,
                                "value": "3.3"
                              },
                              {
                                "columnNum": 28,
                                "value": "6.9"
                              },
                              {
                                "columnNum": 11,
                                "value": "1.3"
                              },
                              {
                                "columnNum": 30,
                                "value": "2.0"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                },
                {
                  "key": "103_2",
                  "logoEntityID": 103,
                  "logoEntityType": "Competition",
                  "name": "NBA - Playoffs",
                  "shortName": "NBA - Playoffs",
                  "showLogo": true,
                  "stats": {
                    "tables": []
                  }
                },
                {
                  "key": "103",
                  "logoEntityID": 103,
                  "logoEntityType": "Competition",
                  "name": "NBA - Total Career",
                  "shortName": "NBA - Total Career",
                  "showLogo": true,
                  "stats": {
                    "tables": []
                  }
                }
              ]
            },
            "clubId": 1303,
            "formationPosition": {
              "id": 22,
              "name": "Center",
              "order": 22,
              "shortName": "C"
            },
            "gender": 1,
            "highlightStats": [
              {
                "competitionId": 103,
                "competitionName": "NBA",
                "competitorId": -1,
                "name": "NBA - Playoffs",
                "phaseName": "Playoffs",
                "phaseNum": 2,
                "seasonNum": 83,
                "stats": [
                  {
                    "imageId": 15,
                    "name": "Points",
                    "order": 1,
                    "shortName": "PPG",
                    "type": 15,
                    "value": "9.4"
                  },
                  {
                    "imageId": 11,
                    "name": "Rebounds",
                    "order": 2,
                    "shortName": "RPG",
                    "type": 11,
                    "value": "7.4"
                  },
                  {
                    "imageId": 13,
                    "name": "Assists",
                    "order": 3,
                    "shortName": "APG",
                    "type": 13,
                    "value": "2.4"
                  },
                  {
                    "imageId": 10,
                    "name": "Games Played",
                    "order": 4,
                    "shortName": "GP",
                    "type": 10,
                    "value": "5"
                  },
                  {
                    "imageId": 57,
                    "name": "Minutes",
                    "order": 5,
                    "shortName": "MIN",
                    "type": 57,
                    "value": "37.4"
                  }
                ]
              },
              {
                "competitionId": 103,
                "competitionName": "NBA",
                "competitorId": -1,
                "name": "NBA - Regular Season",
                "phaseName": "Regular Season",
                "phaseNum": 1,
                "seasonNum": 83,
                "stats": [
                  {
                    "imageId": 15,
                    "name": "Points",
                    "order": 1,
                    "shortName": "PPG",
                    "type": 15,
                    "value": "14.3"
                  },
                  {
                    "imageId": 11,
                    "name": "Rebounds",
                    "order": 2,
                    "shortName": "RPG",
                    "type": 11,
                    "value": "9.8"
                  },
                  {
                    "imageId": 13,
                    "name": "Assists",
                    "order": 3,
                    "shortName": "APG",
                    "type": 13,
                    "value": "1.7"
                  },
                  {
                    "imageId": 10,
                    "name": "Games Played",
                    "order": 4,
                    "shortName": "GP",
                    "type": 10,
                    "value": "68"
                  },
                  {
                    "imageId": 57,
                    "name": "Minutes",
                    "order": 5,
                    "shortName": "MIN",
                    "type": 57,
                    "value": "32.1"
                  }
                ]
              },
              {
                "competitionId": 103,
                "competitionName": "NBA",
                "competitorId": -1,
                "name": "NBA - Total",
                "seasonNum": 83,
                "stats": [
                  {
                    "imageId": 15,
                    "name": "Points",
                    "order": 1,
                    "shortName": "PPG",
                    "type": 15,
                    "value": "13.9"
                  },
                  {
                    "imageId": 11,
                    "name": "Rebounds",
                    "order": 2,
                    "shortName": "RPG",
                    "type": 11,
                    "value": "9.6"
                  },
                  {
                    "imageId": 13,
                    "name": "Assists",
                    "order": 3,
                    "shortName": "APG",
                    "type": 13,
                    "value": "1.7"
                  },
                  {
                    "imageId": 10,
                    "name": "Games Played",
                    "order": 4,
                    "shortName": "GP",
                    "type": 10,
                    "value": "73"
                  },
                  {
                    "imageId": 57,
                    "name": "Minutes",
                    "order": 5,
                    "shortName": "MIN",
                    "type": 57,
                    "value": "32.4"
                  }
                ]
              }
            ],
            "id": 53436,
            "imageVersion": 0,
            "jerseyNum": 31,
            "lastMatches": {
              "games": [
                {
                  "athleteStats": [
                    {
                      "logo": false,
                      "type": 11,
                      "value": "35:56"
                    },
                    {
                      "logo": false,
                      "type": 92,
                      "value": "4"
                    },
                    {
                      "logo": false,
                      "type": 25,
                      "value": "4"
                    },
                    {
                      "logo": false,
                      "type": 26,
                      "value": "4"
                    },
                    {
                      "type": 27,
                      "value": "0"
                    },
                    {
                      "type": 29,
                      "value": "0"
                    },
                    {
                      "logo": false,
                      "type": 88,
                      "value": "2/6"
                    },
                    {
                      "type": 17,
                      "value": "0"
                    },
                    {
                      "type": 21,
                      "value": "0"
                    },
                    {
                      "logo": false,
                      "type": 23,
                      "value": "2"
                    },
                    {
                      "logo": false,
                      "type": 24,
                      "value": "2"
                    },
                    {
                      "type": 28,
                      "value": "0"
                    },
                    {
                      "logo": false,
                      "type": 30,
                      "value": "4"
                    },
                    {
                      "type": 31,
                      "value": "0"
                    }
                  ],
                  "game": {
                    "awayCompetitor": {
                      "competitorNum": 2,
                      "countryId": 350,
                      "hasSquad": true,
                      "id": 1313,
                      "imageVersion": 1,
                      "isWinner": true,
                      "name": "New York Knicks",
                      "nameForURL": "new-york-knicks",
                      "popularityRank": 873,
                      "score": 106,
                      "seriesScore": 3,
                      "shortName": "Knicks",
                      "sportId": 2,
                      "type": 1
                    },
                    "competitionDisplayName": "NBA - 1st Round",
                    "competitionId": 103,
                    "gameTimeAndStatusDisplayType": 1,
                    "groupNum": 6,
                    "homeAwayTeamOrder": 1,
                    "homeCompetitor": {
                      "competitorNum": 1,
                      "countryId": 353,
                      "hasSquad": true,
                      "id": 1303,
                      "imageVersion": 1,
                      "isWinner": false,
                      "name": "Cleveland Cavaliers",
                      "nameForURL": "cleveland-cavaliers",
                      "popularityRank": 1588,
                      "score": 95,
                      "seriesScore": 1,
                      "shortName": "Cavaliers",
                      "sportId": 2,
                      "type": 1
                    },
                    "id": 3797744,
                    "scores": [
                      95,
                      106
                    ],
                    "seasonNum": 83,
                    "shortStatusText": "Final",
                    "sportId": 2,
                    "stageNum": 4,
                    "startTime": "2023-04-26T18:00:00-05:00",
                    "statusGroup": 4,
                    "statusText": "Final",
                    "winner": 2
                  },
                  "hasStats": true,
                  "played": true,
                  "relatedCompetitor": 1303
                },
                {
                  "athleteStats": [
                    {
                      "logo": false,
                      "type": 11,
                      "value": "40:01"
                    },
                    {
                      "logo": false,
                      "type": 92,
                      "value": "14"
                    },
                    {
                      "logo": false,
                      "type": 25,
                      "value": "4"
                    },
                    {
                      "type": 26,
                      "value": "0"
                    },
                    {
                      "logo": false,
                      "type": 27,
                      "value": "1"
                    },
                    {
                      "type": 29,
                      "value": "0"
                    },
                    {
                      "logo": false,
                      "type": 88,
                      "value": "7/11"
                    },
                    {
                      "type": 17,
                      "value": "0"
                    },
                    {
                      "type": 21,
                      "value": "0"
                    },
                    {
                      "logo": false,
                      "type": 23,
                      "value": "1"
                    },
                    {
                      "logo": false,
                      "type": 24,
                      "value": "3"
                    },
                    {
                      "logo": false,
                      "type": 28,
                      "value": "1"
                    },
                    {
                      "logo": false,
                      "type": 30,
                      "value": "1"
                    },
                    {
                      "type": 31,
                      "value": "0"
                    }
                  ],
                  "game": {
                    "awayCompetitor": {
                      "competitorNum": 2,
                      "countryId": 353,
                      "hasSquad": true,
                      "id": 1303,
                      "imageVersion": 1,
                      "isWinner": false,
                      "name": "Cleveland Cavaliers",
                      "nameForURL": "cleveland-cavaliers",
                      "popularityRank": 1588,
                      "score": 93,
                      "seriesScore": 1,
                      "shortName": "Cavaliers",
                      "sportId": 2,
                      "type": 1
                    },
                    "competitionDisplayName": "NBA - 1st Round",
                    "competitionId": 103,
                    "gameTimeAndStatusDisplayType": 1,
                    "groupNum": 6,
                    "homeAwayTeamOrder": 1,
                    "homeCompetitor": {
                      "competitorNum": 1,
                      "countryId": 350,
                      "hasSquad": true,
                      "id": 1313,
                      "imageVersion": 1,
                      "isWinner": true,
                      "name": "New York Knicks",
                      "nameForURL": "new-york-knicks",
                      "popularityRank": 873,
                      "score": 102,
                      "seriesScore": 2,
                      "shortName": "Knicks",
                      "sportId": 2,
                      "type": 1
                    },
                    "id": 3797746,
                    "scores": [
                      102,
                      93
                    ],
                    "seasonNum": 83,
                    "shortStatusText": "Final",
                    "sportId": 2,
                    "stageNum": 4,
                    "startTime": "2023-04-23T12:00:00-05:00",
                    "statusGroup": 4,
                    "statusText": "Final",
                    "winner": 1
                  },
                  "hasStats": true,
                  "played": true,
                  "relatedCompetitor": 1303
                },
                {
                  "athleteStats": [
                    {
                      "logo": false,
                      "type": 11,
                      "value": "36:54"
                    },
                    {
                      "logo": false,
                      "type": 92,
                      "value": "6"
                    },
                    {
                      "logo": false,
                      "type": 25,
                      "value": "5"
                    },
                    {
                      "logo": false,
                      "type": 26,
                      "value": "1"
                    },
                    {
                      "type": 27,
                      "value": "0"
                    },
                    {
                      "logo": false,
                      "type": 29,
                      "value": "2"
                    },
                    {
                      "logo": false,
                      "type": 88,
                      "value": "3/3"
                    },
                    {
                      "type": 17,
                      "value": "0"
                    },
                    {
                      "type": 21,
                      "value": "0"
                    },
                    {
                      "logo": false,
                      "type": 23,
                      "value": "3"
                    },
                    {
                      "logo": false,
                      "type": 24,
                      "value": "2"
                    },
                    {
                      "type": 28,
                      "value": "0"
                    },
                    {
                      "type": 30,
                      "value": "0"
                    },
                    {
                      "type": 31,
                      "value": "0"
                    }
                  ],
                  "game": {
                    "awayCompetitor": {
                      "competitorNum": 2,
                      "countryId": 353,
                      "hasSquad": true,
                      "id": 1303,
                      "imageVersion": 1,
                      "isWinner": false,
                      "name": "Cleveland Cavaliers",
                      "nameForURL": "cleveland-cavaliers",
                      "popularityRank": 1588,
                      "score": 79,
                      "seriesScore": 1,
                      "shortName": "Cavaliers",
                      "sportId": 2,
                      "type": 1
                    },
                    "competitionDisplayName": "NBA - 1st Round",
                    "competitionId": 103,
                    "gameTimeAndStatusDisplayType": 1,
                    "groupNum": 6,
                    "homeAwayTeamOrder": 1,
                    "homeCompetitor": {
                      "competitorNum": 1,
                      "countryId": 350,
                      "hasSquad": true,
                      "id": 1313,
                      "imageVersion": 1,
                      "isWinner": true,
                      "name": "New York Knicks",
                      "nameForURL": "new-york-knicks",
                      "popularityRank": 873,
                      "score": 99,
                      "seriesScore": 1,
                      "shortName": "Knicks",
                      "sportId": 2,
                      "type": 1
                    },
                    "id": 3797749,
                    "scores": [
                      99,
                      79
                    ],
                    "seasonNum": 83,
                    "shortStatusText": "Final",
                    "sportId": 2,
                    "stageNum": 4,
                    "startTime": "2023-04-21T19:30:00-05:00",
                    "statusGroup": 4,
                    "statusText": "Final",
                    "winner": 1
                  },
                  "hasStats": true,
                  "played": true,
                  "relatedCompetitor": 1303
                },
                {
                  "athleteStats": [
                    {
                      "logo": false,
                      "type": 11,
                      "value": "34:49"
                    },
                    {
                      "logo": false,
                      "type": 92,
                      "value": "9"
                    },
                    {
                      "logo": false,
                      "type": 25,
                      "value": "10"
                    },
                    {
                      "logo": false,
                      "type": 26,
                      "value": "3"
                    },
                    {
                      "logo": false,
                      "type": 27,
                      "value": "3"
                    },
                    {
                      "logo": false,
                      "type": 29,
                      "value": "3"
                    },
                    {
                      "logo": false,
                      "type": 88,
                      "value": "4/8"
                    },
                    {
                      "type": 17,
                      "value": "0"
                    },
                    {
                      "logo": false,
                      "type": 21,
                      "value": "1/2"
                    },
                    {
                      "logo": false,
                      "type": 23,
                      "value": "6"
                    },
                    {
                      "logo": false,
                      "type": 24,
                      "value": "4"
                    },
                    {
                      "logo": false,
                      "type": 28,
                      "value": "1"
                    },
                    {
                      "logo": false,
                      "type": 30,
                      "value": "2"
                    },
                    {
                      "logo": false,
                      "type": 31,
                      "value": "16"
                    }
                  ],
                  "game": {
                    "awayCompetitor": {
                      "competitorNum": 2,
                      "countryId": 350,
                      "hasSquad": true,
                      "id": 1313,
                      "imageVersion": 1,
                      "isWinner": false,
                      "name": "New York Knicks",
                      "nameForURL": "new-york-knicks",
                      "popularityRank": 873,
                      "score": 90,
                      "seriesScore": 1,
                      "shortName": "Knicks",
                      "sportId": 2,
                      "type": 1
                    },
                    "competitionDisplayName": "NBA - 1st Round",
                    "competitionId": 103,
                    "gameTimeAndStatusDisplayType": 1,
                    "groupNum": 6,
                    "homeAwayTeamOrder": 1,
                    "homeCompetitor": {
                      "competitorNum": 1,
                      "countryId": 353,
                      "hasSquad": true,
                      "id": 1303,
                      "imageVersion": 1,
                      "isWinner": true,
                      "name": "Cleveland Cavaliers",
                      "nameForURL": "cleveland-cavaliers",
                      "popularityRank": 1588,
                      "score": 107,
                      "seriesScore": 0,
                      "shortName": "Cavaliers",
                      "sportId": 2,
                      "type": 1
                    },
                    "id": 3797750,
                    "scores": [
                      107,
                      90
                    ],
                    "seasonNum": 83,
                    "shortStatusText": "Final",
                    "sportId": 2,
                    "stageNum": 4,
                    "startTime": "2023-04-18T18:30:00-05:00",
                    "statusGroup": 4,
                    "statusText": "Final",
                    "winner": 1
                  },
                  "hasStats": true,
                  "played": true,
                  "relatedCompetitor": 1303
                },
                {
                  "athleteStats": [
                    {
                      "logo": false,
                      "type": 11,
                      "value": "42:52"
                    },
                    {
                      "logo": false,
                      "type": 92,
                      "value": "14"
                    },
                    {
                      "logo": false,
                      "type": 25,
                      "value": "14"
                    },
                    {
                      "logo": false,
                      "type": 26,
                      "value": "4"
                    },
                    {
                      "type": 27,
                      "value": "0"
                    },
                    {
                      "type": 29,
                      "value": "0"
                    },
                    {
                      "logo": false,
                      "type": 88,
                      "value": "6/8"
                    },
                    {
                      "type": 17,
                      "value": "0"
                    },
                    {
                      "logo": false,
                      "type": 21,
                      "value": "2/2"
                    },
                    {
                      "logo": false,
                      "type": 23,
                      "value": "3"
                    },
                    {
                      "logo": false,
                      "type": 24,
                      "value": "11"
                    },
                    {
                      "logo": false,
                      "type": 28,
                      "value": "1"
                    },
                    {
                      "logo": false,
                      "type": 30,
                      "value": "3"
                    },
                    {
                      "logo": false,
                      "type": 31,
                      "value": "2"
                    }
                  ],
                  "game": {
                    "awayCompetitor": {
                      "competitorNum": 2,
                      "countryId": 350,
                      "hasSquad": true,
                      "id": 1313,
                      "imageVersion": 1,
                      "isWinner": true,
                      "name": "New York Knicks",
                      "nameForURL": "new-york-knicks",
                      "popularityRank": 873,
                      "score": 101,
                      "seriesScore": 0,
                      "shortName": "Knicks",
                      "sportId": 2,
                      "type": 1
                    },
                    "competitionDisplayName": "NBA - 1st Round",
                    "competitionId": 103,
                    "gameTimeAndStatusDisplayType": 1,
                    "groupNum": 6,
                    "homeAwayTeamOrder": 1,
                    "homeCompetitor": {
                      "competitorNum": 1,
                      "countryId": 353,
                      "hasSquad": true,
                      "id": 1303,
                      "imageVersion": 1,
                      "isWinner": false,
                      "name": "Cleveland Cavaliers",
                      "nameForURL": "cleveland-cavaliers",
                      "popularityRank": 1588,
                      "score": 97,
                      "seriesScore": 0,
                      "shortName": "Cavaliers",
                      "sportId": 2,
                      "type": 1
                    },
                    "id": 3796955,
                    "roundNum": 1,
                    "scores": [
                      97,
                      101
                    ],
                    "seasonNum": 83,
                    "shortStatusText": "Final",
                    "sportId": 2,
                    "stageNum": 4,
                    "startTime": "2023-04-15T17:00:00-05:00",
                    "statusGroup": 4,
                    "statusText": "Final",
                    "winner": 2
                  },
                  "hasStats": true,
                  "played": true,
                  "relatedCompetitor": 1303
                }
              ],
              "headers": [
                {
                  "category": 1,
                  "description": "Minutes",
                  "title": "Min",
                  "type": 11
                },
                {
                  "category": 1,
                  "description": "Points",
                  "title": "Pts",
                  "type": 92
                },
                {
                  "category": 1,
                  "description": "Rebounds",
                  "title": "Reb",
                  "type": 25
                },
                {
                  "category": 1,
                  "description": "Assists",
                  "title": "Ast",
                  "type": 26
                },
                {
                  "category": 1,
                  "description": "Steals",
                  "title": "Stl",
                  "type": 27
                },
                {
                  "category": 1,
                  "description": "Blocks",
                  "title": "Blk",
                  "type": 29
                },
                {
                  "category": 1,
                  "description": "Field goals",
                  "title": "FG",
                  "type": 88
                },
                {
                  "category": 1,
                  "description": "3 points",
                  "title": "3PT",
                  "type": 17
                },
                {
                  "category": 1,
                  "description": "Free throws",
                  "title": "FT",
                  "type": 21
                },
                {
                  "category": 1,
                  "description": "Offensive rebounds",
                  "title": "OR",
                  "type": 23
                },
                {
                  "category": 1,
                  "description": "Defensive rebounds",
                  "title": "DR",
                  "type": 24
                },
                {
                  "category": 1,
                  "description": "Turnovers",
                  "title": "TO",
                  "type": 28
                },
                {
                  "category": 1,
                  "description": "Personal fouls",
                  "title": "PF",
                  "type": 30
                },
                {
                  "category": 1,
                  "description": "Plus Minus",
                  "title": "+/-",
                  "type": 31
                }
              ]
            },
            "name": "Jarrett Allen",
            "nameForURL": "jarrett-allen",
            "nationalTeamId": 2397,
            "nationalTeamStatsText": "",
            "nationalityId": 18,
            "nationalityName": "USA",
            "playerDetails": [
              {
                "title": "21/04/1998",
                "value": "25 years"
              },
              {
                "title": "Height",
                "value": "2.11"
              },
              {
                "title": "Salary",
                "value": "$20M"
              }
            ],
            "position": {
              "id": 8,
              "name": "Center",
              "shortName": "C"
            },
            "shortName": "J. Allen",
            "sportId": 2,
            "status": 1,
            "transfers": [
              {
                "active": true,
                "competitorId": 1303,
                "date": "2021-01-14T00:00:00+00:00",
                "price": "",
                "salary": "$20M",
                "transferTitle": "Trade",
                "transferType": 10
              },
              {
                "active": false,
                "competitorId": 1308,
                "date": "2017-06-22T00:00:00+00:00",
                "draftPick": 22,
                "draftRound": 1,
                "draftedBy": 1308,
                "transferTitle": "Drafted",
                "transferType": 11
              },
              {
                "active": false,
                "competitorId": 1554,
                "date": "",
                "price": "",
                "transferTitle": "College",
                "transferType": 12
              }
            ]
          }
        ],
        "competitions": [
          {
            "color": "#006BB7",
            "competitorsType": 0,
            "countryId": 18,
            "currentPhaseName": "Playoffs",
            "currentPhaseNum": 2,
            "currentSeasonNum": 83,
            "currentStageNum": 6,
            "currentStageType": 3,
            "hasBrackets": true,
            "id": 103,
            "imageVersion": 3,
            "name": "NBA",
            "nameForURL": "nba",
            "popularityRank": 12669583,
            "sportId": 2
          },
          {
            "competitorsType": 0,
            "countryId": 12,
            "currentSeasonNum": -1,
            "currentStageNum": -1,
            "currentStageType": -1,
            "hasBrackets": false,
            "id": 83,
            "imageVersion": 1,
            "name": "Federation Cup",
            "nameForURL": "federation-cup",
            "popularityRank": 41374,
            "sportId": 2
          },
          {
            "color": "#006BB7",
            "competitorsType": 0,
            "countryId": 18,
            "currentPhaseName": "Playoffs",
            "currentPhaseNum": 2,
            "currentSeasonNum": 83,
            "currentStageNum": 6,
            "currentStageType": 3,
            "hasBrackets": true,
            "id": 103,
            "imageVersion": 3,
            "name": "NBA",
            "nameForURL": "nba",
            "popularityRank": 12669583,
            "sportId": 2
          }
        ],
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
            "popularityRank": 1588,
            "shortName": "Cavaliers",
            "sportId": 2,
            "symbolicName": "CLE",
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
            "popularityRank": 549,
            "sportId": 2,
            "symbolicName": "USA",
            "type": 2
          },
          {
            "color": "#000000",
            "competitorNum": 0,
            "countryId": 350,
            "hasSquad": true,
            "id": 1308,
            "imageVersion": 1,
            "mainCompetitionId": 103,
            "name": "Brooklyn Nets",
            "nameForURL": "brooklyn-nets",
            "popularityRank": 1054,
            "shortName": "Nets",
            "sportId": 2,
            "symbolicName": "BKN",
            "type": 1
          },
          {
            "color": "#BF5700",
            "competitorNum": 0,
            "countryId": 375,
            "hasSquad": true,
            "id": 1554,
            "imageVersion": 2,
            "mainCompetitionId": 7630,
            "name": "Texas",
            "nameForURL": "texas",
            "popularityRank": 15,
            "sportId": 2,
            "type": 32
          },
          {
            "color": "#006BB6",
            "competitorNum": 0,
            "countryId": 350,
            "hasSquad": true,
            "id": 1313,
            "imageVersion": 1,
            "mainCompetitionId": 103,
            "name": "New York Knicks",
            "nameForURL": "new-york-knicks",
            "popularityRank": 873,
            "shortName": "Knicks",
            "sportId": 2,
            "symbolicName": "NYK",
            "type": 1
          }
        ],
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
            "id": 353,
            "imageVersion": 2,
            "name": "Ohio (USA)",
            "nameForURL": "ohio-(usa)"
          },
          {
            "id": 350,
            "imageVersion": 2,
            "name": "New York (USA)",
            "nameForURL": "new-york-(usa)"
          },
          {
            "id": 375,
            "imageVersion": 2,
            "name": "Texas (USA)",
            "nameForURL": "texas-(usa)"
          }
        ],
        "lastUpdateId": 0,
        "sports": [
          {
            "id": 2,
            "imageVersion": 1,
            "name": "Basketball",
            "nameForURL": "basketball"
          }
        ],
        "ttl": 0
      }
    }
  
//}