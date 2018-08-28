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

  constructor(private connectorService:ConnectorService) { }

  ngOnInit() {
  }

  searchSummoner()
  {
    // this.connectorService.searchSummoner(this.summonerName).subscribe();
    this.connectorService.searchSummoner(this.summonerName);
    this.profileIconUrl = 'http://ddragon.leagueoflegends.com/cdn/8.16.1/img/profileicon/'+this.connectorService.summonerInfo.summoner_icon+'.png'
    this.leagueIconUrl = '../../assets/'+this.connectorService.summonerInfo.summoner_league[0]+'.png'
  }

}
