import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { FrontComponent } from './front/front.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, FrontComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Tasks';

  constructor(private router:Router){}
  

}
