import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizionoGareService {
  eventidove: any;

  constructor() { }

  getGara(id:number){

    for (let index = 0; index < this.eventidove.length; index ++ ) {
      var gara = this.eventidove[index]

      if (id == gara.id){
        return gara.name
      }


    }

    return "stato non trovato";
  }

  getfakegare(){
    return{
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
      "currentStageNum": 6,
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
      "popularityRank": 12669583,
      "sportId": 2,
      "totalGames": 1
    }
  ],
  "competitors": [
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
      "popularityRank": 1033,
      "shortName": "Bucks",
      "sportId": 2,
      "symbolicName": "MIL",
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
      "popularityRank": 1986,
      "shortName": "Heat",
      "sportId": 2,
      "symbolicName": "MIA",
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
      "totalGames": 1
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
    }
  ],
  "games": [
    {
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
        "popularityRank": 1986,
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
      "homeAwayTeamOrder": 0,
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
        "popularityRank": 1033,
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
    }
  ],
  "lastUpdateId": 4493157967,
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
}}}
  

