import { Injectable } from '@angular/core';
//Http
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

//import 'rxjs/Rx'; // Para funcion map


@Injectable({
  providedIn: 'root'
})
export class ConnectorService {

  constructor(private http:HttpClient) {
  }

  
  data:any;
  summonerInfo:any;

  searchSummoner(summonerName){
      var url = `https://loltips.herokuapp.com/stats/`+summonerName;  
      return this.http.get<Summoner>(url)    
  }
}

export interface Summoner{  
  n_games: Number,
  avg_kda: Number,
  avg_vision_score: Number,
  avg_gpm: Number,
  avg_cspm: Number,
  avg_dmgpm_to_champions: Number,
  summoner_name: String,
  summoner_level: Number,
  summoner_icon: Number,
  summoner_league: Object,
}