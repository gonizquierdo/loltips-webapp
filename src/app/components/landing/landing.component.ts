import { Component, OnInit } from '@angular/core';
import { ConnectorService, Summoner } from '../../services/connector.service';

import { Observable } from 'rxjs'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  
  summonerName:string;
  profileIconUrl:string;
  leagueIconUrl:string;
  summonerInfo:Summoner;
  

  constructor(private connectorService:ConnectorService) { }

  ngOnInit() {
    this.summonerInfo = {
      n_games: 0 ,
      avg_kda: 0,
      avg_vision_score: 0,
      avg_gpm: 0,
      avg_cspm: 0,
      avg_dmgpm_to_champions: 0,
      summoner_name: "",
      summoner_level: 0,
      summoner_icon: 0,
      summoner_league: null,
    }
  }

  searchSummoner()
  {
    if (this.summonerName  != null){
      console.log(this.summonerName)
      console.log("Loading summoner ...");
      this.connectorService.searchSummoner(this.summonerName).subscribe(data =>{
        this.summonerInfo = data;
        console.log(data);
        this.profileIconUrl = 'http://ddragon.leagueoflegends.com/cdn/8.16.1/img/profileicon/'+ this.summonerInfo.summoner_icon+'.png';
        this.leagueIconUrl = '../../assets/'+ this.summonerInfo.summoner_league[0]+ '.png';
        console.log("Summoner loaded!")
      });
    }
    // this.connectorService.searchSummoner(this.summonerName).subscribe();
   

    
  }

}
