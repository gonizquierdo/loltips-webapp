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
}