import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { AnyNaptrRecord } from 'dns';
import { response } from 'express';
import { retry } from 'rxjs';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http : HttpClient) { }

  getData(cityName : string){
    const baseUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/
    ${cityName}?key=KPS9UTV6FX3SC6A8FAES3UGE5&unitGroup=metric`;
    return this.http.get(baseUrl);
  }

  getIconUrl(lat : any, lon : any){
    const iconUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=cc0e302589cbccec59a95eed7d75a97f`;
    return this.http.get(iconUrl);
  }

  getIconImg(iconId : string){
    return `http://openweathermap.org/img/wn/${iconId}.png`
  }  
}
