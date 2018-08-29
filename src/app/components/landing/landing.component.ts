import { Component, OnInit } from '@angular/core';
import { ConnectorService } from '../../services/connector.service';

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
  summonerInfo:object = {
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

  constructor(private connectorService:ConnectorService) { }

  ngOnInit() {
  }

  searchSummoner()
  {
    // this.connectorService.searchSummoner(this.summonerName).subscribe();
    this.connectorService.searchSummoner(this.summonerName).subscribe(data =>{
      console.log(data)
      this.summonerInfo = data;
      this.profileIconUrl = 'http://ddragon.leagueoflegends.com/cdn/8.16.1/img/profileicon/'+this.summonerInfo.summoner_icon+'.png'
      this.leagueIconUrl = '../../assets/'+this.summonerInfo.summoner_league[0]+'.png'
    });

    
  }

}
