import { Injectable } from '@angular/core';
//Http
import { Http, Headers, Response } from '@angular/http';
import { map } from 'rxjs/operators';

//import 'rxjs/Rx'; // Para funcion map


@Injectable({
  providedIn: 'root'
})
export class ConnectorService {

  constructor(private http:Http) {

    let emptySummoner:object ={
      n_games: "",
      avg_kda: "",
      avg_vision_score: "",
      avg_gpm: "",
      avg_cspm: "",
      avg_dmgpm_to_champions: "",
      summoner_name: "",
      summoner_level:"",
      summoner_icon: "",
      summoner_league: "",
    };

    this.summonerInfo = emptySummoner;

  }

  data:any;
  summonerInfo:any;

  searchSummoner(summonerName){

    this.data = {
      "n_games": 39,
      "avg_kda": 3.61,
      "avg_vision_score": 23.56,
      "avg_gpm": 454.04,
      "avg_cspm": 5.97,
      "avg_dmgpm_to_champions": 607.0,
      "summoner_name": "Meisser",
      "summoner_level": 112,
      "summoner_icon": 1391,
      "summoner_league": ["DIAMOND","V"],
      }
      this.summonerInfo = this.data


      let url = `http://192.168.0.19:5000/active-game/`+summonerName;
      return this.http.get(url).pipe(map( res => {
            this.data = res;
            this.summonerInfo = JSON.parse(this.data._body);
            console.log(this.summonerInfo)
            })

      )
  }
}
