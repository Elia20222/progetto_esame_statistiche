import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API_URL= 'https://allscores.p.rapidapi.com/api/allscores';
  private API_SPORT= 'https://allscores.p.rapidapi.com/api/allscores/sports';
  private API_SQUADRE= 'https://therundown-therundown-v1.p.rapidapi.com/sports/2/teams';
  private API_RISULTATI= 'https://allscores.p.rapidapi.com/api/allscores/results';
  private API_STATO= 'https://allscores.p.rapidapi.com/api/allscores/stats';
  private API_ATLETI= 'https://allscores.p.rapidapi.com/api/allscores/top-athletes'
  private API_PUNTEGGI= 'https://allscores.p.rapidapi.com/api/allscores/custom-scores'
  private API_GIOCHI= 'https://allscores.p.rapidapi.com/api/allscores/games-scores'
  private API_CALENDARIO ='https://sofascores.p.rapidapi.com/v1/calendar/daily-unique-tournaments'
   constructor(private http: HttpClient) { }


  httpHeader = {
    headers: new HttpHeaders({
    'X-RapidAPI-Key': '56fe11d70emsh95a39e1809ef2a7p1ffc3ajsn2f279bbdd8b8',
    'X-RapidAPI-Host': 'allscores.p.rapidapi.com'
    })
  }
  getSquadre():Observable<any>{

    return this.http.get<any>('https://allscores.p.rapidapi.com/api/allscores/sports', {headers: this.httpHeader.headers})

  }
   getRisultati(competition:number){
    return this.http.get<any>(this.API_RISULTATI,{
     params:{
      langId: 1,
      timezone: "America/Chicago",
      competition: competition,
      
      
      //competition: competition
      //include: include,
      //affiliate_ids: affiliate_ids,
      //offset: offset
     },
     headers:{'X-RapidAPI-Key': '56fe11d70emsh95a39e1809ef2a7p1ffc3ajsn2f279bbdd8b8'}
    })
  }


  getCalendario(startDate:string, langId: number, sport:number, endDate:string, timezone:"America/Chicago"){ //api diverso allscores
    return this.http.get<any>(this.API_CALENDARIO,{
    params:{

    startDate: startDate,
    timezone: timezone,
    langId: langId,
    sport: sport,
    endDate: endDate
    //withCount: withCount
     },
     headers:{'X-RapidAPI-Key': '56fe11d70emsh95a39e1809ef2a7p1ffc3ajsn2f279bbdd8b8'}
    })
  }


  getGiochi(sport_id: number, timezone:"America/Chicago", month:string){ //api diverso allscores
    return this.http.get<any>(this.API_GIOCHI,{
    params:{
      sport_id:sport_id,
      timezone:timezone,
      month:month
    //withCount: withCount
     },
     headers:{'X-RapidAPI-Key': '56fe11d70emsh95a39e1809ef2a7p1ffc3ajsn2f279bbdd8b8'}
    })
  }


  getSport(timezone:"America/Chicago", langId: number,){ //api diverso allscores
    return this.http.get<any>(this.API_SPORT,{
    params:{
    timezone: timezone,
    langId: langId,
    //withCount: withCount
     },
     headers:{'X-RapidAPI-Key': '56fe11d70emsh95a39e1809ef2a7p1ffc3ajsn2f279bbdd8b8'}
    })
  }

  getNazione(langId:1, sportId: number, timezone:"America/Chicago", ){ //api diverso allscores
    return this.http.get<any>(this.API_STATO,{
      params:{
        langId:langId,
        timezone:timezone,
        sportId:sportId
      //withCount: withCount
       },
       headers:{'X-RapidAPI-Key': '56fe11d70emsh95a39e1809ef2a7p1ffc3ajsn2f279bbdd8b8'}
      })
  }

  getPunteggi(langId:1, timezone:"America/Chicago", startDate: string, endDate: string){ //api diverso allscores
    return this.http.get<any>(this.API_PUNTEGGI,{
      params:{
        langId:langId,
        timezone:timezone,
        startDate:startDate,
        endDate:endDate
        //withCount: withCount
       },
       headers:{'X-RapidAPI-Key': '56fe11d70emsh95a39e1809ef2a7p1ffc3ajsn2f279bbdd8b8'}
      })
  }

  getAtleta(langId:1,timezone: "America/Chicago", limit: number, sportType: number){ //api diverso allscores
    return this.http.get<any>(this.API_ATLETI,{
      params:{
        langId:langId,
        timezone:timezone,
        limit: limit,
        sportType: sportType
        //withCount: withCount
       },
       headers:{'X-RapidAPI-Key': '56fe11d70emsh95a39e1809ef2a7p1ffc3ajsn2f279bbdd8b8'}
      })
  }


  getfakerisultati(){
    return {
      "bookmakers": [
        {
          "actionButton": {
            "label": "Bet Now",
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
          },
          "color": "#007B5B",
          "id": 14,
          "imageVersion": 3,
          "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
          "name": "Bet365",
          "nameForURL": "bet365"
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
          "currentStageNum": 5,
          "currentStageType": 3,
          "hasActiveGames": true,
          "hasBrackets": true,
          "hasStandings": true,
          "hasStandingsGroups": false,
          "id": 103,
          "imageVersion": 3,
          "liveGames": 0,
          "name": "NBA",
          "nameForURL": "nba",
          "popularityRank": 12377063,
          "sportId": 2,
          "totalGames": 37
        }
      ],
      "competitors": [
        {
          "color": "#0E2240",
          "competitorNum": 0,
          "countryId": 324,
          "hasSquad": true,
          "id": 1323,
          "imageVersion": 1,
          "mainCompetitionId": 103,
          "name": "Denver Nuggets",
          "nameForURL": "denver-nuggets",
          "popularityRank": 796,
          "shortName": "Nuggets",
          "sportId": 2,
          "symbolicName": "DEN",
          "type": 1
        },
        {
          "color": "#1D1160",
          "competitorNum": 0,
          "countryId": 321,
          "hasSquad": true,
          "id": 1320,
          "imageVersion": 1,
          "mainCompetitionId": 103,
          "name": "Phoenix Suns",
          "nameForURL": "phoenix-suns",
          "popularityRank": 825,
          "shortName": "Suns",
          "sportId": 2,
          "symbolicName": "PHX",
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
          "popularityRank": 2774,
          "shortName": "Celtics",
          "sportId": 2,
          "symbolicName": "BOS",
          "type": 1
        },
        {
          "color": "#006BB6",
          "competitorNum": 0,
          "countryId": 356,
          "hasSquad": true,
          "id": 1306,
          "imageVersion": 1,
          "mainCompetitionId": 103,
          "name": "Philadelphia 76ers",
          "nameForURL": "philadelphia-76ers",
          "popularityRank": 935,
          "shortName": "76ers",
          "sportId": 2,
          "symbolicName": "PHI",
          "type": 1
        },
        {
          "color": "#5A2D81",
          "competitorNum": 0,
          "countryId": 323,
          "hasSquad": true,
          "id": 1325,
          "imageVersion": 1,
          "mainCompetitionId": 103,
          "name": "Sacramento Kings",
          "nameForURL": "sacramento-kings",
          "popularityRank": 609,
          "shortName": "Kings",
          "sportId": 2,
          "symbolicName": "SAC",
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
          "popularityRank": 2984,
          "shortName": "Warriors",
          "sportId": 2,
          "symbolicName": "GSW",
          "type": 1
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
          "popularityRank": 863,
          "shortName": "Knicks",
          "sportId": 2,
          "symbolicName": "NYK",
          "type": 1
        },
        {
          "color": "#98002E",
          "competitorNum": 0,
          "countryId": 327,
          "hasSquad": true,
          "id": 1314,
          "imageVersion": 1,
          "mainCompetitionId": 103,
          "name": "Miami Heat",
          "nameForURL": "miami-heat",
          "popularityRank": 1946,
          "shortName": "Heat",
          "sportId": 2,
          "symbolicName": "MIA",
          "type": 1
        },
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
          "popularityRank": 3431,
          "shortName": "Lakers",
          "sportId": 2,
          "symbolicName": "LAL",
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
          "popularityRank": 802,
          "shortName": "Grizzlies",
          "sportId": 2,
          "symbolicName": "MEM",
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
          "popularityRank": 825,
          "shortName": "Hawks",
          "sportId": 2,
          "symbolicName": "ATL",
          "type": 1
        },
        {
          "color": "#00471B",
          "competitorNum": 0,
          "countryId": 366,
          "hasSquad": true,
          "id": 1312,
          "imageVersion": 1,
          "mainCompetitionId": 103,
          "name": "Milwaukee Bucks",
          "nameForURL": "milwaukee-bucks",
          "popularityRank": 1029,
          "shortName": "Bucks",
          "sportId": 2,
          "symbolicName": "MIL",
          "type": 1
        },
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
          "popularityRank": 1585,
          "shortName": "Cavaliers",
          "sportId": 2,
          "symbolicName": "CLE",
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
          "popularityRank": 976,
          "shortName": "Clippers",
          "sportId": 2,
          "symbolicName": "LAC",
          "type": 1
        },
        {
          "color": "#0C2340",
          "competitorNum": 0,
          "countryId": 341,
          "hasSquad": true,
          "id": 1328,
          "imageVersion": 1,
          "mainCompetitionId": 103,
          "name": "Minnesota Timberwolves",
          "nameForURL": "minnesota-timberwolves",
          "popularityRank": 687,
          "shortName": "Timberwolves",
          "sportId": 2,
          "symbolicName": "MIN",
          "type": 1
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
          "popularityRank": 1050,
          "shortName": "Nets",
          "sportId": 2,
          "symbolicName": "BKN",
          "type": 1
        }
      ],
      "countries": [
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
          "totalGames": 37
        },
        {
          "id": 339,
          "imageVersion": 2,
          "name": "Massachusetts (USA)",
          "nameForURL": "massachusetts-(usa)"
        },
        {
          "id": 328,
          "imageVersion": 4,
          "name": "Georgia (USA)",
          "nameForURL": "georgia-(usa)"
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
          "id": 321,
          "imageVersion": 2,
          "name": "Arizona (USA)",
          "nameForURL": "arizona-(usa)"
        },
        {
          "id": 323,
          "imageVersion": 2,
          "name": "California (USA)",
          "nameForURL": "california-(usa)"
        },
        {
          "id": 360,
          "imageVersion": 2,
          "name": "Tennessee (USA)",
          "nameForURL": "tennessee-(usa)"
        },
        {
          "id": 366,
          "imageVersion": 3,
          "name": "Wisconsin (USA)",
          "nameForURL": "wisconsin-(usa)"
        },
        {
          "id": 327,
          "imageVersion": 2,
          "name": "Florida (USA)",
          "nameForURL": "florida-(usa)"
        },
        {
          "id": 324,
          "imageVersion": 2,
          "name": "Colorado (USA)",
          "nameForURL": "colorado-(usa)"
        },
        {
          "id": 341,
          "imageVersion": 2,
          "name": "Minnesota (USA)",
          "nameForURL": "minnesota-(usa)"
        },
        {
          "id": 356,
          "imageVersion": 2,
          "name": "Pennsylvania (USA)",
          "nameForURL": "pennsylvania-(usa)"
        }
      ],
      "x": [
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#1D1160",
            "competitorNum": 0,
            "countryId": 321,
            "hasSquad": true,
            "id": 1320,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "Phoenix Suns",
            "nameForURL": "phoenix-suns",
            "popularityRank": 825,
            "score": 87,
            "seriesScore": 0,
            "shortName": "Suns",
            "sportId": 2,
            "symbolicName": "PHX",
            "toQualify": false,
            "type": 1
          },
          "competitionDisplayName": "NBA - Conference Semi Finals",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 1,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#0E2240",
            "competitorNum": 0,
            "countryId": 324,
            "hasSquad": true,
            "id": 1323,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "Denver Nuggets",
            "nameForURL": "denver-nuggets",
            "popularityRank": 796,
            "score": 97,
            "seriesScore": 2,
            "shortName": "Nuggets",
            "sportId": 2,
            "symbolicName": "DEN",
            "toQualify": false,
            "type": 1
          },
          "id": 3805549,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3805549,
            "lineId": 544573791,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "-175",
                  "decimal": 1.57,
                  "fractional": "4/7"
                },
                "trend": 2
              },
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "+145",
                  "decimal": 2.45,
                  "fractional": "16/11"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "Nuggets Covered -4"
              },
              {
                "isBold": true,
                "text": "Under 229.5"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 2,
          "seasonNum": 83,
          "shortStatusText": "Final",
          "sportId": 2,
          "stageName": "Conference Semi Finals",
          "stageNum": 5,
          "standingsName": "Standings",
          "startTime": "2023-05-01T21:00:00-05:00",
          "statusGroup": 4,
          "statusText": "Final",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#006BB6",
            "competitorNum": 0,
            "countryId": 356,
            "hasSquad": true,
            "id": 1306,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "Philadelphia 76ers",
            "nameForURL": "philadelphia-76ers",
            "popularityRank": 935,
            "score": 119,
            "seriesScore": 1,
            "shortName": "76ers",
            "sportId": 2,
            "symbolicName": "PHI",
            "toQualify": false,
            "type": 1
          },
          "competitionDisplayName": "NBA - Conference Semi Finals",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 4,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#007A33",
            "competitorNum": 0,
            "countryId": 339,
            "hasSquad": true,
            "id": 1300,
            "imageVersion": 2,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "Boston Celtics",
            "nameForURL": "boston-celtics",
            "popularityRank": 2774,
            "score": 115,
            "seriesScore": 0,
            "shortName": "Celtics",
            "sportId": 2,
            "symbolicName": "BOS",
            "toQualify": false,
            "type": 1
          },
          "id": 3806114,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3806114,
            "lineId": 545111615,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "-588",
                  "decimal": 1.17,
                  "fractional": "1/6"
                },
                "trend": 2
              },
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "+425",
                  "decimal": 5.25,
                  "fractional": "4/1"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "76ers Covered +10.5"
              },
              {
                "isBold": true,
                "text": "Over 215"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 1,
          "seasonNum": 83,
          "shortStatusText": "Final",
          "sportId": 2,
          "stageName": "Conference Semi Finals",
          "stageNum": 5,
          "standingsName": "Standings",
          "startTime": "2023-05-01T18:30:00-05:00",
          "statusGroup": 4,
          "statusText": "Final",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#1D428A",
            "competitorNum": 0,
            "countryId": 323,
            "hasSquad": true,
            "id": 1322,
            "imageVersion": 2,
            "isQualified": true,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "Golden State Warriors",
            "nameForURL": "golden-state-warriors",
            "popularityRank": 2984,
            "score": 120,
            "seriesScore": 4,
            "shortName": "Warriors",
            "sportId": 2,
            "symbolicName": "GSW",
            "toQualify": true,
            "type": 1
          },
          "competitionDisplayName": "NBA - 1st Round",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 3,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#5A2D81",
            "competitorNum": 0,
            "countryId": 323,
            "hasSquad": true,
            "id": 1325,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "Sacramento Kings",
            "nameForURL": "sacramento-kings",
            "popularityRank": 609,
            "score": 100,
            "seriesScore": 3,
            "shortName": "Kings",
            "sportId": 2,
            "symbolicName": "SAC",
            "toQualify": false,
            "type": 1
          },
          "id": 3798012,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3798012,
            "lineId": 545400220,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "-120",
                  "decimal": 1.83,
                  "fractional": "5/6"
                },
                "trend": 2
              },
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "-110",
                  "decimal": 1.91,
                  "fractional": "9/10"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "Warriors Covered +1.5"
              },
              {
                "isBold": true,
                "text": "Under 229.5"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 7,
          "seasonNum": 83,
          "shortStatusText": "Final",
          "sportId": 2,
          "stageName": "1st Round",
          "stageNum": 4,
          "standingsName": "Standings",
          "startTime": "2023-04-30T14:30:00-05:00",
          "statusGroup": 4,
          "statusText": "Final",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#98002E",
            "competitorNum": 0,
            "countryId": 327,
            "hasSquad": true,
            "id": 1314,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "Miami Heat",
            "nameForURL": "miami-heat",
            "popularityRank": 1946,
            "score": 108,
            "seriesScore": 1,
            "shortName": "Heat",
            "sportId": 2,
            "symbolicName": "MIA",
            "toQualify": false,
            "type": 1
          },
          "competitionDisplayName": "NBA - Conference Semi Finals",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 3,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#006BB6",
            "competitorNum": 0,
            "countryId": 350,
            "hasSquad": true,
            "id": 1313,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "New York Knicks",
            "nameForURL": "new-york-knicks",
            "popularityRank": 863,
            "score": 101,
            "seriesScore": 0,
            "shortName": "Knicks",
            "sportId": 2,
            "symbolicName": "NYK",
            "toQualify": false,
            "type": 1
          },
          "id": 3805841,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3805841,
            "lineId": 544941395,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "-179",
                  "decimal": 1.56,
                  "fractional": "5/9"
                },
                "trend": 2
              },
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "+150",
                  "decimal": 2.5,
                  "fractional": "3/2"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "Heat Covered +4"
              },
              {
                "isBold": true,
                "text": "Under 210"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 1,
          "seasonNum": 83,
          "shortStatusText": "Final",
          "sportId": 2,
          "stageName": "Conference Semi Finals",
          "stageNum": 5,
          "standingsName": "Standings",
          "startTime": "2023-04-30T12:00:00-05:00",
          "statusGroup": 4,
          "statusText": "Final",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#1D1160",
            "competitorNum": 0,
            "countryId": 321,
            "hasSquad": true,
            "id": 1320,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "Phoenix Suns",
            "nameForURL": "phoenix-suns",
            "popularityRank": 825,
            "score": 107,
            "seriesScore": 0,
            "shortName": "Suns",
            "sportId": 2,
            "symbolicName": "PHX",
            "toQualify": false,
            "type": 1
          },
          "competitionDisplayName": "NBA - Conference Semi Finals",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 1,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#0E2240",
            "competitorNum": 0,
            "countryId": 324,
            "hasSquad": true,
            "id": 1323,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "Denver Nuggets",
            "nameForURL": "denver-nuggets",
            "popularityRank": 796,
            "score": 125,
            "seriesScore": 2,
            "shortName": "Nuggets",
            "sportId": 2,
            "symbolicName": "DEN",
            "toQualify": false,
            "type": 1
          },
          "id": 3805550,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3805550,
            "lineId": 544844872,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "-179",
                  "decimal": 1.56,
                  "fractional": "5/9"
                },
                "trend": 2
              },
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "+150",
                  "decimal": 2.5,
                  "fractional": "3/2"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "Nuggets Covered -4.5"
              },
              {
                "isBold": true,
                "text": "Over 227"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 1,
          "seasonNum": 83,
          "shortStatusText": "Final",
          "sportId": 2,
          "stageName": "Conference Semi Finals",
          "stageNum": 5,
          "standingsName": "Standings",
          "startTime": "2023-04-29T19:30:00-05:00",
          "statusGroup": 4,
          "statusText": "Final",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#5D76A9",
            "competitorNum": 0,
            "countryId": 360,
            "hasSquad": true,
            "id": 1327,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "Memphis Grizzlies",
            "nameForURL": "memphis-grizzlies",
            "popularityRank": 802,
            "score": 85,
            "seriesScore": 2,
            "shortName": "Grizzlies",
            "sportId": 2,
            "symbolicName": "MEM",
            "toQualify": false,
            "type": 1
          },
          "competitionDisplayName": "NBA - 1st Round",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 4,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#552583",
            "competitorNum": 0,
            "countryId": 323,
            "hasSquad": true,
            "id": 1317,
            "imageVersion": 1,
            "isQualified": true,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "Los Angeles Lakers",
            "nameForURL": "los-angeles-lakers",
            "popularityRank": 3431,
            "score": 125,
            "seriesScore": 4,
            "shortName": "Lakers",
            "sportId": 2,
            "symbolicName": "LAL",
            "toQualify": true,
            "type": 1
          },
          "id": 3797712,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3797712,
            "lineId": 544807086,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "-189",
                  "decimal": 1.53,
                  "fractional": "8/15"
                },
                "trend": 2
              },
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "+160",
                  "decimal": 2.6,
                  "fractional": "8/5"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "Lakers Covered -4.5"
              },
              {
                "isBold": true,
                "text": "Under 219.5"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 6,
          "seasonNum": 83,
          "shortStatusText": "Final",
          "sportId": 2,
          "stageName": "1st Round",
          "stageNum": 4,
          "standingsName": "Standings",
          "startTime": "2023-04-28T21:30:00-05:00",
          "statusGroup": 4,
          "statusText": "Final",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#5A2D81",
            "competitorNum": 0,
            "countryId": 323,
            "hasSquad": true,
            "id": 1325,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "Sacramento Kings",
            "nameForURL": "sacramento-kings",
            "popularityRank": 609,
            "score": 118,
            "seriesScore": 3,
            "shortName": "Kings",
            "sportId": 2,
            "symbolicName": "SAC",
            "toQualify": false,
            "type": 1
          },
          "competitionDisplayName": "NBA - 1st Round",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 3,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#1D428A",
            "competitorNum": 0,
            "countryId": 323,
            "hasSquad": true,
            "id": 1322,
            "imageVersion": 2,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "Golden State Warriors",
            "nameForURL": "golden-state-warriors",
            "popularityRank": 2984,
            "score": 99,
            "seriesScore": 4,
            "shortName": "Warriors",
            "sportId": 2,
            "symbolicName": "GSW",
            "toQualify": false,
            "type": 1
          },
          "id": 3797710,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3797710,
            "lineId": 544844874,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "-278",
                  "decimal": 1.36,
                  "fractional": "4/11"
                },
                "trend": 2
              },
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "+230",
                  "decimal": 3.3,
                  "fractional": "7/3"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "Kings Covered +6.5"
              },
              {
                "isBold": true,
                "text": "Under 236.5"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 6,
          "seasonNum": 83,
          "shortStatusText": "Final",
          "sportId": 2,
          "stageName": "1st Round",
          "stageNum": 4,
          "standingsName": "Standings",
          "startTime": "2023-04-28T19:00:00-05:00",
          "statusGroup": 4,
          "statusText": "Final",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#007A33",
            "competitorNum": 0,
            "countryId": 339,
            "hasSquad": true,
            "id": 1300,
            "imageVersion": 2,
            "isQualified": true,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "Boston Celtics",
            "nameForURL": "boston-celtics",
            "popularityRank": 2774,
            "score": 128,
            "seriesScore": 4,
            "shortName": "Celtics",
            "sportId": 2,
            "symbolicName": "BOS",
            "toQualify": true,
            "type": 1
          },
          "competitionDisplayName": "NBA - 1st Round",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 8,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#E03A3E",
            "competitorNum": 0,
            "countryId": 328,
            "hasSquad": true,
            "id": 1307,
            "imageVersion": 2,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "Atlanta Hawks",
            "nameForURL": "atlanta-hawks",
            "popularityRank": 825,
            "score": 120,
            "seriesScore": 2,
            "shortName": "Hawks",
            "sportId": 2,
            "symbolicName": "ATL",
            "toQualify": false,
            "type": 1
          },
          "id": 3797741,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3797741,
            "lineId": 544538612,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "+240",
                  "decimal": 3.4,
                  "fractional": "12/5"
                },
                "trend": 2
              },
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "-323",
                  "decimal": 1.31,
                  "fractional": "4/13"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "Celtics Covered -7"
              },
              {
                "isBold": true,
                "text": "Over 230.5"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 6,
          "seasonNum": 83,
          "shortStatusText": "Final",
          "sportId": 2,
          "stageName": "1st Round",
          "stageNum": 4,
          "standingsName": "Standings",
          "startTime": "2023-04-27T19:30:00-05:00",
          "statusGroup": 4,
          "statusText": "Final",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#1D428A",
            "competitorNum": 0,
            "countryId": 323,
            "hasSquad": true,
            "id": 1322,
            "imageVersion": 2,
            "isQualified": false,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "Golden State Warriors",
            "nameForURL": "golden-state-warriors",
            "popularityRank": 2984,
            "score": 123,
            "seriesScore": 4,
            "shortName": "Warriors",
            "sportId": 2,
            "symbolicName": "GSW",
            "toQualify": false,
            "type": 1
          },
          "competitionDisplayName": "NBA - 1st Round",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 3,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#5A2D81",
            "competitorNum": 0,
            "countryId": 323,
            "hasSquad": true,
            "id": 1325,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "Sacramento Kings",
            "nameForURL": "sacramento-kings",
            "popularityRank": 609,
            "score": 116,
            "seriesScore": 3,
            "shortName": "Kings",
            "sportId": 2,
            "symbolicName": "SAC",
            "toQualify": false,
            "type": 1
          },
          "id": 3797715,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3797715,
            "lineId": 543270295,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "+110",
                  "decimal": 2.1,
                  "fractional": "10/9"
                },
                "trend": 2
              },
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "-141",
                  "decimal": 1.71,
                  "fractional": "5/7"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "Warriors Covered -3"
              },
              {
                "isBold": true,
                "text": "Over 232.5"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 5,
          "seasonNum": 83,
          "shortStatusText": "Final",
          "sportId": 2,
          "stageName": "1st Round",
          "stageNum": 4,
          "standingsName": "Standings",
          "startTime": "2023-04-26T21:00:00-05:00",
          "statusGroup": 4,
          "statusText": "Final",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#98002E",
            "competitorNum": 0,
            "countryId": 327,
            "hasSquad": true,
            "id": 1314,
            "imageVersion": 1,
            "isQualified": true,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "Miami Heat",
            "nameForURL": "miami-heat",
            "popularityRank": 1946,
            "score": 128,
            "seriesScore": 4,
            "shortName": "Heat",
            "sportId": 2,
            "symbolicName": "MIA",
            "toQualify": true,
            "type": 1
          },
          "competitionDisplayName": "NBA - 1st Round",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 5,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#00471B",
            "competitorNum": 0,
            "countryId": 366,
            "hasSquad": true,
            "id": 1312,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "Milwaukee Bucks",
            "nameForURL": "milwaukee-bucks",
            "popularityRank": 1029,
            "score": 126,
            "seriesScore": 1,
            "shortName": "Bucks",
            "sportId": 2,
            "symbolicName": "MIL",
            "toQualify": false,
            "type": 1
          },
          "id": 3798542,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3798542,
            "lineId": 543848373,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "-769",
                  "decimal": 1.13,
                  "fractional": "2/15"
                },
                "trend": 2
              },
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "+500",
                  "decimal": 6,
                  "fractional": "5/1"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "Heat Covered +13.5"
              },
              {
                "isBold": true,
                "text": "Over 219.5"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 5,
          "seasonNum": 83,
          "shortStatusText": "Final (OT)",
          "sportId": 2,
          "stageName": "1st Round",
          "stageNum": 4,
          "standingsName": "Standings",
          "startTime": "2023-04-26T20:30:00-05:00",
          "statusGroup": 4,
          "statusText": "Final (OT)",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#552583",
            "competitorNum": 0,
            "countryId": 323,
            "hasSquad": true,
            "id": 1317,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "Los Angeles Lakers",
            "nameForURL": "los-angeles-lakers",
            "popularityRank": 3431,
            "score": 99,
            "seriesScore": 4,
            "shortName": "Lakers",
            "sportId": 2,
            "symbolicName": "LAL",
            "toQualify": false,
            "type": 1
          },
          "competitionDisplayName": "NBA - 1st Round",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 4,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#5D76A9",
            "competitorNum": 0,
            "countryId": 360,
            "hasSquad": true,
            "id": 1327,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "Memphis Grizzlies",
            "nameForURL": "memphis-grizzlies",
            "popularityRank": 802,
            "score": 116,
            "seriesScore": 2,
            "shortName": "Grizzlies",
            "sportId": 2,
            "symbolicName": "MEM",
            "toQualify": false,
            "type": 1
          },
          "id": 3797717,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3797717,
            "lineId": 543849999,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "-189",
                  "decimal": 1.53,
                  "fractional": "8/15"
                },
                "trend": 2
              },
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "+160",
                  "decimal": 2.6,
                  "fractional": "8/5"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "Grizzlies Covered -4.5"
              },
              {
                "isBold": true,
                "text": "Under 222.5"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 5,
          "seasonNum": 83,
          "shortStatusText": "Final",
          "sportId": 2,
          "stageName": "1st Round",
          "stageNum": 4,
          "standingsName": "Standings",
          "startTime": "2023-04-26T18:30:00-05:00",
          "statusGroup": 4,
          "statusText": "Final",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#006BB6",
            "competitorNum": 0,
            "countryId": 350,
            "hasSquad": true,
            "id": 1313,
            "imageVersion": 1,
            "isQualified": true,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "New York Knicks",
            "nameForURL": "new-york-knicks",
            "popularityRank": 863,
            "score": 106,
            "seriesScore": 4,
            "shortName": "Knicks",
            "sportId": 2,
            "symbolicName": "NYK",
            "toQualify": true,
            "type": 1
          },
          "competitionDisplayName": "NBA - 1st Round",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 6,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#860038",
            "competitorNum": 0,
            "countryId": 353,
            "hasSquad": true,
            "id": 1303,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "Cleveland Cavaliers",
            "nameForURL": "cleveland-cavaliers",
            "popularityRank": 1585,
            "score": 95,
            "seriesScore": 1,
            "shortName": "Cavaliers",
            "sportId": 2,
            "symbolicName": "CLE",
            "toQualify": false,
            "type": 1
          },
          "id": 3797744,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3797744,
            "lineId": 543031160,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "-233",
                  "decimal": 1.43,
                  "fractional": "3/7"
                },
                "trend": 2
              },
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "+185",
                  "decimal": 2.85,
                  "fractional": "13/7"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "Knicks Covered +5.5"
              },
              {
                "isBold": true,
                "text": "Under 202.5"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 5,
          "seasonNum": 83,
          "shortStatusText": "Final",
          "sportId": 2,
          "stageName": "1st Round",
          "stageNum": 4,
          "standingsName": "Standings",
          "startTime": "2023-04-26T18:00:00-05:00",
          "statusGroup": 4,
          "statusText": "Final",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#C8102E",
            "competitorNum": 0,
            "countryId": 323,
            "hasSquad": true,
            "id": 1326,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "Los Angeles Clippers",
            "nameForURL": "los-angeles-clippers",
            "popularityRank": 976,
            "score": 130,
            "seriesScore": 1,
            "shortName": "Clippers",
            "sportId": 2,
            "symbolicName": "LAC",
            "toQualify": false,
            "type": 1
          },
          "competitionDisplayName": "NBA - 1st Round",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 2,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#1D1160",
            "competitorNum": 0,
            "countryId": 321,
            "hasSquad": true,
            "id": 1320,
            "imageVersion": 1,
            "isQualified": true,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "Phoenix Suns",
            "nameForURL": "phoenix-suns",
            "popularityRank": 825,
            "score": 136,
            "seriesScore": 4,
            "shortName": "Suns",
            "sportId": 2,
            "symbolicName": "PHX",
            "toQualify": true,
            "type": 1
          },
          "id": 3797719,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3797719,
            "lineId": 542769765,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "-833",
                  "decimal": 1.12,
                  "fractional": "1/8"
                },
                "trend": 2
              },
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "+550",
                  "decimal": 6.5,
                  "fractional": "11/2"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "Clippers Covered +12.5"
              },
              {
                "isBold": true,
                "text": "Over 225.5"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 5,
          "seasonNum": 83,
          "shortStatusText": "Final",
          "sportId": 2,
          "stageName": "1st Round",
          "stageNum": 4,
          "standingsName": "Standings",
          "startTime": "2023-04-25T21:00:00-05:00",
          "statusGroup": 4,
          "statusText": "Final",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#0C2340",
            "competitorNum": 0,
            "countryId": 341,
            "hasSquad": true,
            "id": 1328,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "Minnesota Timberwolves",
            "nameForURL": "minnesota-timberwolves",
            "popularityRank": 687,
            "score": 109,
            "seriesScore": 1,
            "shortName": "Timberwolves",
            "sportId": 2,
            "symbolicName": "MIN",
            "toQualify": false,
            "type": 1
          },
          "competitionDisplayName": "NBA - 1st Round",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 1,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#0E2240",
            "competitorNum": 0,
            "countryId": 324,
            "hasSquad": true,
            "id": 1323,
            "imageVersion": 1,
            "isQualified": true,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "Denver Nuggets",
            "nameForURL": "denver-nuggets",
            "popularityRank": 796,
            "score": 112,
            "seriesScore": 4,
            "shortName": "Nuggets",
            "sportId": 2,
            "symbolicName": "DEN",
            "toQualify": true,
            "type": 1
          },
          "id": 3798637,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3798637,
            "lineId": 543419898,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "-500",
                  "decimal": 1.2,
                  "fractional": "1/5"
                },
                "trend": 2
              },
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "+360",
                  "decimal": 4.6,
                  "fractional": "7/2"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "roundName": "Game",
          "roundNum": 5,
          "seasonNum": 83,
          "shortStatusText": "Final",
          "sportId": 2,
          "stageName": "1st Round",
          "stageNum": 4,
          "standingsName": "Standings",
          "startTime": "2023-04-25T20:00:00-05:00",
          "statusGroup": 4,
          "statusText": "Final",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#E03A3E",
            "competitorNum": 0,
            "countryId": 328,
            "hasSquad": true,
            "id": 1307,
            "imageVersion": 2,
            "isQualified": false,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "Atlanta Hawks",
            "nameForURL": "atlanta-hawks",
            "popularityRank": 825,
            "score": 119,
            "seriesScore": 2,
            "shortName": "Hawks",
            "sportId": 2,
            "symbolicName": "ATL",
            "toQualify": false,
            "type": 1
          },
          "competitionDisplayName": "NBA - 1st Round",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 8,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#007A33",
            "competitorNum": 0,
            "countryId": 339,
            "hasSquad": true,
            "id": 1300,
            "imageVersion": 2,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "Boston Celtics",
            "nameForURL": "boston-celtics",
            "popularityRank": 2774,
            "score": 117,
            "seriesScore": 4,
            "shortName": "Celtics",
            "sportId": 2,
            "symbolicName": "BOS",
            "toQualify": false,
            "type": 1
          },
          "id": 3797742,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3797742,
            "lineId": 543415581,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "-1000",
                  "decimal": 1.1,
                  "fractional": "1/10"
                },
                "trend": 2
              },
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "+650",
                  "decimal": 7.5,
                  "fractional": "13/2"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "Hawks Covered +13.5"
              },
              {
                "isBold": true,
                "text": "Over 230.5"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 5,
          "seasonNum": 83,
          "shortStatusText": "Final",
          "sportId": 2,
          "stageName": "1st Round",
          "stageNum": 4,
          "standingsName": "Standings",
          "startTime": "2023-04-25T18:30:00-05:00",
          "statusGroup": 4,
          "statusText": "Final",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#5D76A9",
            "competitorNum": 0,
            "countryId": 360,
            "hasSquad": true,
            "id": 1327,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "Memphis Grizzlies",
            "nameForURL": "memphis-grizzlies",
            "popularityRank": 802,
            "score": 111,
            "seriesScore": 2,
            "shortName": "Grizzlies",
            "sportId": 2,
            "symbolicName": "MEM",
            "toQualify": false,
            "type": 1
          },
          "competitionDisplayName": "NBA - 1st Round",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 4,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#552583",
            "competitorNum": 0,
            "countryId": 323,
            "hasSquad": true,
            "id": 1317,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "Los Angeles Lakers",
            "nameForURL": "los-angeles-lakers",
            "popularityRank": 3431,
            "score": 117,
            "seriesScore": 4,
            "shortName": "Lakers",
            "sportId": 2,
            "symbolicName": "LAL",
            "toQualify": false,
            "type": 1
          },
          "id": 3797718,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3797718,
            "lineId": 542825017,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "-200",
                  "decimal": 1.5,
                  "fractional": "1/2"
                },
                "trend": 2
              },
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "+165",
                  "decimal": 2.65,
                  "fractional": "5/3"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "Lakers Covered -4.5"
              },
              {
                "isBold": true,
                "text": "Over 224"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 4,
          "seasonNum": 83,
          "shortStatusText": "Final (OT)",
          "sportId": 2,
          "stageName": "1st Round",
          "stageNum": 4,
          "standingsName": "Standings",
          "startTime": "2023-04-24T21:00:00-05:00",
          "statusGroup": 4,
          "statusText": "Final (OT)",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#00471B",
            "competitorNum": 0,
            "countryId": 366,
            "hasSquad": true,
            "id": 1312,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "Milwaukee Bucks",
            "nameForURL": "milwaukee-bucks",
            "popularityRank": 1029,
            "score": 114,
            "seriesScore": 1,
            "shortName": "Bucks",
            "sportId": 2,
            "symbolicName": "MIL",
            "toQualify": false,
            "type": 1
          },
          "competitionDisplayName": "NBA - 1st Round",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 5,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#98002E",
            "competitorNum": 0,
            "countryId": 327,
            "hasSquad": true,
            "id": 1314,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "Miami Heat",
            "nameForURL": "miami-heat",
            "popularityRank": 1946,
            "score": 119,
            "seriesScore": 4,
            "shortName": "Heat",
            "sportId": 2,
            "symbolicName": "MIA",
            "toQualify": false,
            "type": 1
          },
          "id": 3798541,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3798541,
            "lineId": 542790277,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "+270",
                  "decimal": 3.7,
                  "fractional": "19/7"
                },
                "trend": 2
              },
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "-357",
                  "decimal": 1.28,
                  "fractional": "2/7"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "Heat Covered +8"
              },
              {
                "isBold": true,
                "text": "Over 218"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 4,
          "seasonNum": 83,
          "shortStatusText": "Final",
          "sportId": 2,
          "stageName": "1st Round",
          "stageNum": 4,
          "standingsName": "Standings",
          "startTime": "2023-04-24T18:30:00-05:00",
          "statusGroup": 4,
          "statusText": "Final",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#0E2240",
            "competitorNum": 0,
            "countryId": 324,
            "hasSquad": true,
            "id": 1323,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "Denver Nuggets",
            "nameForURL": "denver-nuggets",
            "popularityRank": 796,
            "score": 108,
            "seriesScore": 4,
            "shortName": "Nuggets",
            "sportId": 2,
            "symbolicName": "DEN",
            "toQualify": false,
            "type": 1
          },
          "competitionDisplayName": "NBA - 1st Round",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 1,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#0C2340",
            "competitorNum": 0,
            "countryId": 341,
            "hasSquad": true,
            "id": 1328,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "Minnesota Timberwolves",
            "nameForURL": "minnesota-timberwolves",
            "popularityRank": 687,
            "score": 114,
            "seriesScore": 1,
            "shortName": "Timberwolves",
            "sportId": 2,
            "symbolicName": "MIN",
            "toQualify": false,
            "type": 1
          },
          "id": 3798636,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3798636,
            "lineId": 542561760,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "+150",
                  "decimal": 2.5,
                  "fractional": "3/2"
                },
                "trend": 2
              },
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "-179",
                  "decimal": 1.56,
                  "fractional": "5/9"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "Wolves Covered +4"
              },
              {
                "isBold": true,
                "text": "Under 222.5"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 4,
          "seasonNum": 83,
          "shortStatusText": "Final (OT)",
          "sportId": 2,
          "stageName": "1st Round",
          "stageNum": 4,
          "standingsName": "Standings",
          "startTime": "2023-04-23T20:30:00-05:00",
          "statusGroup": 4,
          "statusText": "Final (OT)",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#007A33",
            "competitorNum": 0,
            "countryId": 339,
            "hasSquad": true,
            "id": 1300,
            "imageVersion": 2,
            "isQualified": false,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "Boston Celtics",
            "nameForURL": "boston-celtics",
            "popularityRank": 2774,
            "score": 129,
            "seriesScore": 4,
            "shortName": "Celtics",
            "sportId": 2,
            "symbolicName": "BOS",
            "toQualify": false,
            "type": 1
          },
          "competitionDisplayName": "NBA - 1st Round",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 8,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#E03A3E",
            "competitorNum": 0,
            "countryId": 328,
            "hasSquad": true,
            "id": 1307,
            "imageVersion": 2,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "Atlanta Hawks",
            "nameForURL": "atlanta-hawks",
            "popularityRank": 825,
            "score": 121,
            "seriesScore": 2,
            "shortName": "Hawks",
            "sportId": 2,
            "symbolicName": "ATL",
            "toQualify": false,
            "type": 1
          },
          "id": 3797745,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3797745,
            "lineId": 542550083,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "+250",
                  "decimal": 3.5,
                  "fractional": "5/2"
                },
                "trend": 2
              },
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "-312",
                  "decimal": 1.32,
                  "fractional": "1/3"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "Celtics Covered -7"
              },
              {
                "isBold": true,
                "text": "Over 231"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 4,
          "seasonNum": 83,
          "shortStatusText": "Final",
          "sportId": 2,
          "stageName": "1st Round",
          "stageNum": 4,
          "standingsName": "Standings",
          "startTime": "2023-04-23T18:00:00-05:00",
          "statusGroup": 4,
          "statusText": "Final",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#5A2D81",
            "competitorNum": 0,
            "countryId": 323,
            "hasSquad": true,
            "id": 1325,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "Sacramento Kings",
            "nameForURL": "sacramento-kings",
            "popularityRank": 609,
            "score": 125,
            "seriesScore": 3,
            "shortName": "Kings",
            "sportId": 2,
            "symbolicName": "SAC",
            "toQualify": false,
            "type": 1
          },
          "competitionDisplayName": "NBA - 1st Round",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 3,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#1D428A",
            "competitorNum": 0,
            "countryId": 323,
            "hasSquad": true,
            "id": 1322,
            "imageVersion": 2,
            "isQualified": false,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "Golden State Warriors",
            "nameForURL": "golden-state-warriors",
            "popularityRank": 2984,
            "score": 126,
            "seriesScore": 4,
            "shortName": "Warriors",
            "sportId": 2,
            "symbolicName": "GSW",
            "toQualify": false,
            "type": 1
          },
          "id": 3797720,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3797720,
            "lineId": 542354355,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "-345",
                  "decimal": 1.29,
                  "fractional": "2/7"
                },
                "trend": 2
              },
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "+260",
                  "decimal": 3.6,
                  "fractional": "13/5"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "Kings Covered +7"
              },
              {
                "isBold": true,
                "text": "Over 235.5"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 4,
          "seasonNum": 83,
          "shortStatusText": "Final",
          "sportId": 2,
          "stageName": "1st Round",
          "stageNum": 4,
          "standingsName": "Standings",
          "startTime": "2023-04-23T14:30:00-05:00",
          "statusGroup": 4,
          "statusText": "Final",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#860038",
            "competitorNum": 0,
            "countryId": 353,
            "hasSquad": true,
            "id": 1303,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "Cleveland Cavaliers",
            "nameForURL": "cleveland-cavaliers",
            "popularityRank": 1585,
            "score": 93,
            "seriesScore": 1,
            "shortName": "Cavaliers",
            "sportId": 2,
            "symbolicName": "CLE",
            "toQualify": false,
            "type": 1
          },
          "competitionDisplayName": "NBA - 1st Round",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 6,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#006BB6",
            "competitorNum": 0,
            "countryId": 350,
            "hasSquad": true,
            "id": 1313,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "New York Knicks",
            "nameForURL": "new-york-knicks",
            "popularityRank": 863,
            "score": 102,
            "seriesScore": 4,
            "shortName": "Knicks",
            "sportId": 2,
            "symbolicName": "NYK",
            "toQualify": false,
            "type": 1
          },
          "id": 3797746,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3797746,
            "lineId": 542555068,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "-130",
                  "decimal": 1.77,
                  "fractional": "7/9"
                },
                "trend": 2
              },
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "+100",
                  "decimal": 2,
                  "fractional": "1/1"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "Knicks Covered -1.5"
              },
              {
                "isBold": true,
                "text": "Under 203.5"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 4,
          "seasonNum": 83,
          "shortStatusText": "Final",
          "sportId": 2,
          "stageName": "1st Round",
          "stageNum": 4,
          "standingsName": "Standings",
          "startTime": "2023-04-23T12:00:00-05:00",
          "statusGroup": 4,
          "statusText": "Final",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#5D76A9",
            "competitorNum": 0,
            "countryId": 360,
            "hasSquad": true,
            "id": 1327,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "Memphis Grizzlies",
            "nameForURL": "memphis-grizzlies",
            "popularityRank": 802,
            "score": 101,
            "seriesScore": 2,
            "shortName": "Grizzlies",
            "sportId": 2,
            "symbolicName": "MEM",
            "toQualify": false,
            "type": 1
          },
          "competitionDisplayName": "NBA - 1st Round",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 4,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#552583",
            "competitorNum": 0,
            "countryId": 323,
            "hasSquad": true,
            "id": 1317,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "Los Angeles Lakers",
            "nameForURL": "los-angeles-lakers",
            "popularityRank": 3431,
            "score": 111,
            "seriesScore": 4,
            "shortName": "Lakers",
            "sportId": 2,
            "symbolicName": "LAL",
            "toQualify": false,
            "type": 1
          },
          "id": 3797721,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3797721,
            "lineId": 542115995,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "-185",
                  "decimal": 1.54,
                  "fractional": "6/11"
                },
                "trend": 2
              },
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "+155",
                  "decimal": 2.55,
                  "fractional": "14/9"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "Lakers Covered -4"
              },
              {
                "isBold": true,
                "text": "Under 221.5"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 3,
          "seasonNum": 83,
          "shortStatusText": "Final",
          "sportId": 2,
          "stageName": "1st Round",
          "stageNum": 4,
          "standingsName": "Standings",
          "startTime": "2023-04-22T21:00:00-05:00",
          "statusGroup": 4,
          "statusText": "Final",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#00471B",
            "competitorNum": 0,
            "countryId": 366,
            "hasSquad": true,
            "id": 1312,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "Milwaukee Bucks",
            "nameForURL": "milwaukee-bucks",
            "popularityRank": 1029,
            "score": 99,
            "seriesScore": 1,
            "shortName": "Bucks",
            "sportId": 2,
            "symbolicName": "MIL",
            "toQualify": false,
            "type": 1
          },
          "competitionDisplayName": "NBA - 1st Round",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 5,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#98002E",
            "competitorNum": 0,
            "countryId": 327,
            "hasSquad": true,
            "id": 1314,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "Miami Heat",
            "nameForURL": "miami-heat",
            "popularityRank": 1946,
            "score": 121,
            "seriesScore": 4,
            "shortName": "Heat",
            "sportId": 2,
            "symbolicName": "MIA",
            "toQualify": false,
            "type": 1
          },
          "id": 3798540,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3798540,
            "lineId": 542116714,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "+110",
                  "decimal": 2.1,
                  "fractional": "10/9"
                },
                "trend": 2
              },
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "-141",
                  "decimal": 1.71,
                  "fractional": "5/7"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "Heat Covered +2"
              },
              {
                "isBold": true,
                "text": "Over 215.5"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 3,
          "seasonNum": 83,
          "shortStatusText": "Final",
          "sportId": 2,
          "stageName": "1st Round",
          "stageNum": 4,
          "standingsName": "Standings",
          "startTime": "2023-04-22T18:30:00-05:00",
          "statusGroup": 4,
          "statusText": "Final",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#1D1160",
            "competitorNum": 0,
            "countryId": 321,
            "hasSquad": true,
            "id": 1320,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "Phoenix Suns",
            "nameForURL": "phoenix-suns",
            "popularityRank": 825,
            "score": 112,
            "seriesScore": 4,
            "shortName": "Suns",
            "sportId": 2,
            "symbolicName": "PHX",
            "toQualify": false,
            "type": 1
          },
          "competitionDisplayName": "NBA - 1st Round",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 2,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#C8102E",
            "competitorNum": 0,
            "countryId": 323,
            "hasSquad": true,
            "id": 1326,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "Los Angeles Clippers",
            "nameForURL": "los-angeles-clippers",
            "popularityRank": 976,
            "score": 100,
            "seriesScore": 1,
            "shortName": "Clippers",
            "sportId": 2,
            "symbolicName": "LAC",
            "toQualify": false,
            "type": 1
          },
          "id": 3797722,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3797722,
            "lineId": 542354997,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "+265",
                  "decimal": 3.65,
                  "fractional": "8/3"
                },
                "trend": 2
              },
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "-345",
                  "decimal": 1.29,
                  "fractional": "2/7"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "Suns Covered -7.5"
              },
              {
                "isBold": true,
                "text": "Under 227.5"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 4,
          "seasonNum": 83,
          "shortStatusText": "Final",
          "sportId": 2,
          "stageName": "1st Round",
          "stageNum": 4,
          "standingsName": "Standings",
          "startTime": "2023-04-22T14:30:00-05:00",
          "statusGroup": 4,
          "statusText": "Final",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#006BB6",
            "competitorNum": 0,
            "countryId": 356,
            "hasSquad": true,
            "id": 1306,
            "imageVersion": 1,
            "isQualified": true,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "Philadelphia 76ers",
            "nameForURL": "philadelphia-76ers",
            "popularityRank": 935,
            "score": 96,
            "seriesScore": 4,
            "shortName": "76ers",
            "sportId": 2,
            "symbolicName": "PHI",
            "toQualify": true,
            "type": 1
          },
          "competitionDisplayName": "NBA - 1st Round",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 7,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#000000",
            "competitorNum": 0,
            "countryId": 350,
            "hasSquad": true,
            "id": 1308,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "Brooklyn Nets",
            "nameForURL": "brooklyn-nets",
            "popularityRank": 1050,
            "score": 88,
            "seriesScore": 0,
            "shortName": "Nets",
            "sportId": 2,
            "symbolicName": "BKN",
            "toQualify": false,
            "type": 1
          },
          "id": 3797747,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3797747,
            "lineId": 542348681,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "+110",
                  "decimal": 2.1,
                  "fractional": "10/9"
                },
                "trend": 2
              },
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "-130",
                  "decimal": 1.77,
                  "fractional": "7/9"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "76ers Covered -2"
              },
              {
                "isBold": true,
                "text": "Under 210.5"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 4,
          "seasonNum": 83,
          "shortStatusText": "Final",
          "sportId": 2,
          "stageName": "1st Round",
          "stageNum": 4,
          "standingsName": "Standings",
          "startTime": "2023-04-22T12:00:00-05:00",
          "statusGroup": 4,
          "statusText": "Final",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#0E2240",
            "competitorNum": 0,
            "countryId": 324,
            "hasSquad": true,
            "id": 1323,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "Denver Nuggets",
            "nameForURL": "denver-nuggets",
            "popularityRank": 796,
            "score": 120,
            "seriesScore": 4,
            "shortName": "Nuggets",
            "sportId": 2,
            "symbolicName": "DEN",
            "toQualify": false,
            "type": 1
          },
          "competitionDisplayName": "NBA - 1st Round",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 1,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#0C2340",
            "competitorNum": 0,
            "countryId": 341,
            "hasSquad": true,
            "id": 1328,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "Minnesota Timberwolves",
            "nameForURL": "minnesota-timberwolves",
            "popularityRank": 687,
            "score": 111,
            "seriesScore": 1,
            "shortName": "Timberwolves",
            "sportId": 2,
            "symbolicName": "MIN",
            "toQualify": false,
            "type": 1
          },
          "id": 3798635,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3798635,
            "lineId": 542121741,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "+100",
                  "decimal": 2,
                  "fractional": "1/1"
                },
                "trend": 2
              },
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "-130",
                  "decimal": 1.77,
                  "fractional": "7/9"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "Nuggets Covered -1.5"
              },
              {
                "isBold": true,
                "text": "Over 223.5"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 3,
          "seasonNum": 83,
          "shortStatusText": "Final",
          "sportId": 2,
          "stageName": "1st Round",
          "stageNum": 4,
          "standingsName": "Standings",
          "startTime": "2023-04-21T20:30:00-05:00",
          "statusGroup": 4,
          "statusText": "Final",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#860038",
            "competitorNum": 0,
            "countryId": 353,
            "hasSquad": true,
            "id": 1303,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "Cleveland Cavaliers",
            "nameForURL": "cleveland-cavaliers",
            "popularityRank": 1585,
            "score": 79,
            "seriesScore": 1,
            "shortName": "Cavaliers",
            "sportId": 2,
            "symbolicName": "CLE",
            "toQualify": false,
            "type": 1
          },
          "competitionDisplayName": "NBA - 1st Round",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 6,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#006BB6",
            "competitorNum": 0,
            "countryId": 350,
            "hasSquad": true,
            "id": 1313,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "New York Knicks",
            "nameForURL": "new-york-knicks",
            "popularityRank": 863,
            "score": 99,
            "seriesScore": 4,
            "shortName": "Knicks",
            "sportId": 2,
            "symbolicName": "NYK",
            "toQualify": false,
            "type": 1
          },
          "id": 3797749,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3797749,
            "lineId": 541722402,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "-130",
                  "decimal": 1.77,
                  "fractional": "7/9"
                },
                "trend": 2
              },
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "+110",
                  "decimal": 2.1,
                  "fractional": "10/9"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "Knicks Covered -1.5"
              },
              {
                "isBold": true,
                "text": "Under 211.5"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 3,
          "seasonNum": 83,
          "shortStatusText": "Final",
          "sportId": 2,
          "stageName": "1st Round",
          "stageNum": 4,
          "standingsName": "Standings",
          "startTime": "2023-04-21T19:30:00-05:00",
          "statusGroup": 4,
          "statusText": "Final",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#007A33",
            "competitorNum": 0,
            "countryId": 339,
            "hasSquad": true,
            "id": 1300,
            "imageVersion": 2,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "Boston Celtics",
            "nameForURL": "boston-celtics",
            "popularityRank": 2774,
            "score": 122,
            "seriesScore": 4,
            "shortName": "Celtics",
            "sportId": 2,
            "symbolicName": "BOS",
            "toQualify": false,
            "type": 1
          },
          "competitionDisplayName": "NBA - 1st Round",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 8,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#E03A3E",
            "competitorNum": 0,
            "countryId": 328,
            "hasSquad": true,
            "id": 1307,
            "imageVersion": 2,
            "isQualified": false,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "Atlanta Hawks",
            "nameForURL": "atlanta-hawks",
            "popularityRank": 825,
            "score": 130,
            "seriesScore": 2,
            "shortName": "Hawks",
            "sportId": 2,
            "symbolicName": "ATL",
            "toQualify": false,
            "type": 1
          },
          "id": 3797748,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3797748,
            "lineId": 541717445,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "+180",
                  "decimal": 2.8,
                  "fractional": "9/5"
                },
                "trend": 2
              },
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "-227",
                  "decimal": 1.44,
                  "fractional": "4/9"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "Hawks Covered +5.5"
              },
              {
                "isBold": true,
                "text": "Over 228.5"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 3,
          "seasonNum": 83,
          "shortStatusText": "Final",
          "sportId": 2,
          "stageName": "1st Round",
          "stageNum": 4,
          "standingsName": "Standings",
          "startTime": "2023-04-21T18:00:00-05:00",
          "statusGroup": 4,
          "statusText": "Final",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#1D1160",
            "competitorNum": 0,
            "countryId": 321,
            "hasSquad": true,
            "id": 1320,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "Phoenix Suns",
            "nameForURL": "phoenix-suns",
            "popularityRank": 825,
            "score": 129,
            "seriesScore": 4,
            "shortName": "Suns",
            "sportId": 2,
            "symbolicName": "PHX",
            "toQualify": false,
            "type": 1
          },
          "competitionDisplayName": "NBA - 1st Round",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 2,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#C8102E",
            "competitorNum": 0,
            "countryId": 323,
            "hasSquad": true,
            "id": 1326,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "Los Angeles Clippers",
            "nameForURL": "los-angeles-clippers",
            "popularityRank": 976,
            "score": 124,
            "seriesScore": 1,
            "shortName": "Clippers",
            "sportId": 2,
            "symbolicName": "LAC",
            "toQualify": false,
            "type": 1
          },
          "id": 3797726,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3797726,
            "lineId": 541738387,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "+265",
                  "decimal": 3.65,
                  "fractional": "8/3"
                },
                "trend": 2
              },
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "-357",
                  "decimal": 1.28,
                  "fractional": "2/7"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "Clippers Covered +7.5"
              },
              {
                "isBold": true,
                "text": "Over 225.5"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 3,
          "seasonNum": 83,
          "shortStatusText": "Final",
          "sportId": 2,
          "stageName": "1st Round",
          "stageNum": 4,
          "standingsName": "Standings",
          "startTime": "2023-04-20T21:30:00-05:00",
          "statusGroup": 4,
          "statusText": "Final",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#5A2D81",
            "competitorNum": 0,
            "countryId": 323,
            "hasSquad": true,
            "id": 1325,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "Sacramento Kings",
            "nameForURL": "sacramento-kings",
            "popularityRank": 609,
            "score": 97,
            "seriesScore": 3,
            "shortName": "Kings",
            "sportId": 2,
            "symbolicName": "SAC",
            "toQualify": false,
            "type": 1
          },
          "competitionDisplayName": "NBA - 1st Round",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 3,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#1D428A",
            "competitorNum": 0,
            "countryId": 323,
            "hasSquad": true,
            "id": 1322,
            "imageVersion": 2,
            "isQualified": false,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "Golden State Warriors",
            "nameForURL": "golden-state-warriors",
            "popularityRank": 2984,
            "score": 114,
            "seriesScore": 4,
            "shortName": "Warriors",
            "sportId": 2,
            "symbolicName": "GSW",
            "toQualify": false,
            "type": 1
          },
          "id": 3797723,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3797723,
            "lineId": 541247318,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "-250",
                  "decimal": 1.4,
                  "fractional": "2/5"
                },
                "trend": 2
              },
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "+205",
                  "decimal": 3.05,
                  "fractional": "29/14"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "Warriors Covered -6"
              },
              {
                "isBold": true,
                "text": "Under 241"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 3,
          "seasonNum": 83,
          "shortStatusText": "Final",
          "sportId": 2,
          "stageName": "1st Round",
          "stageNum": 4,
          "standingsName": "Standings",
          "startTime": "2023-04-20T21:00:00-05:00",
          "statusGroup": 4,
          "statusText": "Final",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#006BB6",
            "competitorNum": 0,
            "countryId": 356,
            "hasSquad": true,
            "id": 1306,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "Philadelphia 76ers",
            "nameForURL": "philadelphia-76ers",
            "popularityRank": 935,
            "score": 102,
            "seriesScore": 4,
            "shortName": "76ers",
            "sportId": 2,
            "symbolicName": "PHI",
            "toQualify": false,
            "type": 1
          },
          "competitionDisplayName": "NBA - 1st Round",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 7,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#000000",
            "competitorNum": 0,
            "countryId": 350,
            "hasSquad": true,
            "id": 1308,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "Brooklyn Nets",
            "nameForURL": "brooklyn-nets",
            "popularityRank": 1050,
            "score": 97,
            "seriesScore": 0,
            "shortName": "Nets",
            "sportId": 2,
            "symbolicName": "BKN",
            "toQualify": false,
            "type": 1
          },
          "id": 3797751,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3797751,
            "lineId": 541172343,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "+175",
                  "decimal": 2.75,
                  "fractional": "7/4"
                },
                "trend": 2
              },
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "-222",
                  "decimal": 1.45,
                  "fractional": "4/9"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "76ers +5"
              },
              {
                "isBold": true,
                "text": "Under 209.5"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 3,
          "seasonNum": 83,
          "shortStatusText": "Final",
          "sportId": 2,
          "stageName": "1st Round",
          "stageNum": 4,
          "standingsName": "Standings",
          "startTime": "2023-04-20T18:30:00-05:00",
          "statusGroup": 4,
          "statusText": "Final",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#0C2340",
            "competitorNum": 0,
            "countryId": 341,
            "hasSquad": true,
            "id": 1328,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "Minnesota Timberwolves",
            "nameForURL": "minnesota-timberwolves",
            "popularityRank": 687,
            "score": 113,
            "seriesScore": 1,
            "shortName": "Timberwolves",
            "sportId": 2,
            "symbolicName": "MIN",
            "toQualify": false,
            "type": 1
          },
          "competitionDisplayName": "NBA - 1st Round",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 1,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#0E2240",
            "competitorNum": 0,
            "countryId": 324,
            "hasSquad": true,
            "id": 1323,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "Denver Nuggets",
            "nameForURL": "denver-nuggets",
            "popularityRank": 796,
            "score": 122,
            "seriesScore": 4,
            "shortName": "Nuggets",
            "sportId": 2,
            "symbolicName": "DEN",
            "toQualify": false,
            "type": 1
          },
          "id": 3798634,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3798634,
            "lineId": 540639757,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "-370",
                  "decimal": 1.27,
                  "fractional": "3/11"
                },
                "trend": 2
              },
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "+280",
                  "decimal": 3.8,
                  "fractional": "14/5"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "Nuggets Covered -8"
              },
              {
                "isBold": true,
                "text": "Over 222"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 2,
          "seasonNum": 83,
          "shortStatusText": "Final",
          "sportId": 2,
          "stageName": "1st Round",
          "stageNum": 4,
          "standingsName": "Standings",
          "startTime": "2023-04-19T21:00:00-05:00",
          "statusGroup": 4,
          "statusText": "Final",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#98002E",
            "competitorNum": 0,
            "countryId": 327,
            "hasSquad": true,
            "id": 1314,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "Miami Heat",
            "nameForURL": "miami-heat",
            "popularityRank": 1946,
            "score": 122,
            "seriesScore": 4,
            "shortName": "Heat",
            "sportId": 2,
            "symbolicName": "MIA",
            "toQualify": false,
            "type": 1
          },
          "competitionDisplayName": "NBA - 1st Round",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 5,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#00471B",
            "competitorNum": 0,
            "countryId": 366,
            "hasSquad": true,
            "id": 1312,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "Milwaukee Bucks",
            "nameForURL": "milwaukee-bucks",
            "popularityRank": 1029,
            "score": 138,
            "seriesScore": 1,
            "shortName": "Bucks",
            "sportId": 2,
            "symbolicName": "MIL",
            "toQualify": false,
            "type": 1
          },
          "id": 3798539,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3798539,
            "lineId": 540513156,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "-238",
                  "decimal": 1.42,
                  "fractional": "3/7"
                },
                "trend": 2
              },
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "+195",
                  "decimal": 2.95,
                  "fractional": "2/1"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "Bucks Covered -5.5"
              },
              {
                "isBold": true,
                "text": "Over 216.5"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 2,
          "seasonNum": 83,
          "shortStatusText": "Final",
          "sportId": 2,
          "stageName": "1st Round",
          "stageNum": 4,
          "standingsName": "Standings",
          "startTime": "2023-04-19T20:00:00-05:00",
          "statusGroup": 4,
          "statusText": "Final",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#552583",
            "competitorNum": 0,
            "countryId": 323,
            "hasSquad": true,
            "id": 1317,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "Los Angeles Lakers",
            "nameForURL": "los-angeles-lakers",
            "popularityRank": 3431,
            "score": 93,
            "seriesScore": 4,
            "shortName": "Lakers",
            "sportId": 2,
            "symbolicName": "LAL",
            "toQualify": false,
            "type": 1
          },
          "competitionDisplayName": "NBA - 1st Round",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 4,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#5D76A9",
            "competitorNum": 0,
            "countryId": 360,
            "hasSquad": true,
            "id": 1327,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "Memphis Grizzlies",
            "nameForURL": "memphis-grizzlies",
            "popularityRank": 802,
            "score": 103,
            "seriesScore": 2,
            "shortName": "Grizzlies",
            "sportId": 2,
            "symbolicName": "MEM",
            "toQualify": false,
            "type": 1
          },
          "id": 3797724,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3797724,
            "lineId": 540486332,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "-105",
                  "decimal": 1.95,
                  "fractional": "16/17"
                },
                "trend": 2
              },
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "-125",
                  "decimal": 1.8,
                  "fractional": "4/5"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "Grizzlies Covered +1.5"
              },
              {
                "isBold": true,
                "text": "Under 222.5"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 2,
          "seasonNum": 83,
          "shortStatusText": "Final",
          "sportId": 2,
          "stageName": "1st Round",
          "stageNum": 4,
          "standingsName": "Standings",
          "startTime": "2023-04-19T18:30:00-05:00",
          "statusGroup": 4,
          "statusText": "Final",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#C8102E",
            "competitorNum": 0,
            "countryId": 323,
            "hasSquad": true,
            "id": 1326,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "Los Angeles Clippers",
            "nameForURL": "los-angeles-clippers",
            "popularityRank": 976,
            "score": 109,
            "seriesScore": 1,
            "shortName": "Clippers",
            "sportId": 2,
            "symbolicName": "LAC",
            "toQualify": false,
            "type": 1
          },
          "competitionDisplayName": "NBA - 1st Round",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 2,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#1D1160",
            "competitorNum": 0,
            "countryId": 321,
            "hasSquad": true,
            "id": 1320,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "Phoenix Suns",
            "nameForURL": "phoenix-suns",
            "popularityRank": 825,
            "score": 123,
            "seriesScore": 4,
            "shortName": "Suns",
            "sportId": 2,
            "symbolicName": "PHX",
            "toQualify": false,
            "type": 1
          },
          "id": 3797725,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3797725,
            "lineId": 540618000,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "-357",
                  "decimal": 1.28,
                  "fractional": "2/7"
                },
                "trend": 2
              },
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "+280",
                  "decimal": 3.8,
                  "fractional": "14/5"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "Suns Covered -8"
              },
              {
                "isBold": true,
                "text": "Over 227.5"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 2,
          "seasonNum": 83,
          "shortStatusText": "Final",
          "sportId": 2,
          "stageName": "1st Round",
          "stageNum": 4,
          "standingsName": "Standings",
          "startTime": "2023-04-18T21:00:00-05:00",
          "statusGroup": 4,
          "statusText": "Final",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#006BB6",
            "competitorNum": 0,
            "countryId": 350,
            "hasSquad": true,
            "id": 1313,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "New York Knicks",
            "nameForURL": "new-york-knicks",
            "popularityRank": 863,
            "score": 90,
            "seriesScore": 4,
            "shortName": "Knicks",
            "sportId": 2,
            "symbolicName": "NYK",
            "toQualify": false,
            "type": 1
          },
          "competitionDisplayName": "NBA - 1st Round",
          "competitionId": 103,
          "gameTime": 0,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 6,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#860038",
            "competitorNum": 0,
            "countryId": 353,
            "hasSquad": true,
            "id": 1303,
            "imageVersion": 1,
            "isQualified": false,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "Cleveland Cavaliers",
            "nameForURL": "cleveland-cavaliers",
            "popularityRank": 1585,
            "score": 107,
            "seriesScore": 1,
            "shortName": "Cavaliers",
            "sportId": 2,
            "symbolicName": "CLE",
            "toQualify": false,
            "type": 1
          },
          "id": 3797750,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3797750,
            "lineId": 539989698,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "-238",
                  "decimal": 1.42,
                  "fractional": "3/7"
                },
                "trend": 2
              },
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "+195",
                  "decimal": 2.95,
                  "fractional": "2/1"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "Cavaliers Covered -6"
              },
              {
                "isBold": true,
                "text": "Under 214.5"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 2,
          "seasonNum": 83,
          "shortStatusText": "Final",
          "sportId": 2,
          "stageName": "1st Round",
          "stageNum": 4,
          "standingsName": "Standings",
          "startTime": "2023-04-18T18:30:00-05:00",
          "statusGroup": 4,
          "statusText": "Final",
          "winner": 0
        },
        {
          "HomeAwayTeamOrder": 0,
          "awayCompetitor": {
            "color": "#E03A3E",
            "competitorNum": 0,
            "countryId": 328,
            "hasSquad": true,
            "id": 1307,
            "imageVersion": 2,
            "isQualified": false,
            "isWinner": false,
            "mainCompetitionId": 103,
            "name": "Atlanta Hawks",
            "nameForURL": "atlanta-hawks",
            "popularityRank": 825,
            "score": 106,
            "seriesScore": 2,
            "shortName": "Hawks",
            "sportId": 2,
            "symbolicName": "ATL",
            "toQualify": false,
            "type": 1
          },
          "competitionDisplayName": "NBA - 1st Round",
          "competitionId": 103,
          "gameTime": -1,
          "gameTimeAndStatusDisplayType": 1,
          "gameTimeDisplay": "",
          "groupNum": 8,
          "h2hLayout": "US",
          "hasBrackets": true,
          "hasFieldPositions": false,
          "hasLineups": true,
          "hasMissingPlayers": true,
          "hasPreviousMeetings": false,
          "hasRecentMatches": false,
          "hasStandings": false,
          "hasStats": true,
          "hasTVNetworks": false,
          "homeCompetitor": {
            "color": "#007A33",
            "competitorNum": 0,
            "countryId": 339,
            "hasSquad": true,
            "id": 1300,
            "imageVersion": 2,
            "isQualified": false,
            "isWinner": true,
            "mainCompetitionId": 103,
            "name": "Boston Celtics",
            "nameForURL": "boston-celtics",
            "popularityRank": 2774,
            "score": 119,
            "seriesScore": 4,
            "shortName": "Celtics",
            "sportId": 2,
            "symbolicName": "BOS",
            "toQualify": false,
            "type": 1
          },
          "id": 3797752,
          "isHomeAwayInverted": false,
          "justEnded": false,
          "odds": {
            "bookmaker": {
              "actionButton": {
                "label": "Bet Now",
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661"
              },
              "color": "#007B5B",
              "id": 14,
              "imageVersion": 3,
              "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
              "name": "Bet365",
              "nameForURL": "bet365"
            },
            "bookmakerId": 14,
            "gameId": 3797752,
            "lineId": 539978183,
            "lineType": {
              "id": 33,
              "name": "Game Winner",
              "title": "Game Winner"
            },
            "lineTypeId": 33,
            "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
            "options": [
              {
                "isWon": true,
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 1,
                "rate": {
                  "american": "-556",
                  "decimal": 1.18,
                  "fractional": "2/11"
                },
                "trend": 2
              },
              {
                "link": "https://www.bet365.com/olp/open-account?affiliate=365_01303661",
                "num": 2,
                "rate": {
                  "american": "+390",
                  "decimal": 4.9,
                  "fractional": "4/1"
                },
                "trend": 2
              }
            ],
            "trackingUrl": " "
          },
          "oddsPreview": {
            "cells": [
              {
                "isBold": true,
                "text": "Celtics Covered -10"
              },
              {
                "isBold": true,
                "text": "Under 231"
              }
            ]
          },
          "roundName": "Game",
          "roundNum": 2,
          "seasonNum": 83,
          "shortStatusText": "Final",
          "sportId": 2,
          "stageName": "1st Round",
          "stageNum": 4,
          "standingsName": "Standings",
          "startTime": "2023-04-18T18:00:00-05:00",
          "statusGroup": 4,
          "statusText": "Final",
          "winner": 0
        }
      ],
      "lastUpdateId": 4474276116,
      "paging": {
        "nextPage": "langId=1&timezoneId=78&userCountryId=1&apptype=5&competitions=103&games=1&aftergame=3805549&direction=1&withmainodds=true",
        "previousPage": "langId=1&timezoneId=78&userCountryId=1&apptype=5&competitions=103&games=1&aftergame=3797752&direction=-1&withmainodds=true"
      },
      "requestedUpdateId": -1,
      "sports": [
        {
          "id": 2,
          "imageVersion": 1,
          "name": "Basketball",
          "nameForURL": "basketball"
        }
      ],
      "summary": {},
      "ttl": 300
    }
  }
  }

