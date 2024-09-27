import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'c',
  standalone: true,
  imports: [],
  templateUrl: './front.component.html',
  styleUrl: './front.component.css'
})
export class FrontComponent {
 
  constructor(private router:Router){
  }

  
  counterApp(){
    this.router.navigate(['/counter'])
  }

  toDoList(){
    this.router.navigate(['/to-do-list'])
  }

  weather(){
    this.router.navigate(['/weather']);
  }

}
