import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../services/weather.service';
import { error } from 'console';
import { catchError } from 'rxjs';


@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent{

  cityName : string | any = "";
  data : any = "";
  city : any  = "";
  cityTem : string = "";
  cityHumi : string = "";
  iconData : any = "";
  weatherIcon : string = "";
  notFound : string = "";

  constructor(private service : WeatherService){}

  searchCity(){
    try{
      this.service.getData(this.cityName).subscribe(response => {
        this.data = response;
        this.notFound = "";
        this.city = this.data?.resolvedAddress
        this.cityTem = this.data?.currentConditions?.temp+"°C";
        this.cityHumi = this.data?.currentConditions?.humidity+"%rh";

        let lat = Number(this.data.latitude).toFixed(2);
        let lon = Number(this.data.longitude).toFixed(2);

        this.service.getIconUrl(lat, lon).subscribe(
          response => {
            this.iconData = response;
            let iconId = this.iconData['weather'][0].icon;
            this.weatherIcon = this.service.getIconImg(iconId);
          }
        );
        this.cityName = "";
      }
      , error => {
        console.log("error");
        this.notFound = "City not found. Please try again.";
        this.city = "";
        this.cityTem = "";
        this.cityHumi = "";
        this.weatherIcon = ""
      });
    } catch(error){
      console.log("not found");
    }  
  }
}