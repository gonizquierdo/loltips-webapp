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
      return this.http.get(url)    
  }
}
