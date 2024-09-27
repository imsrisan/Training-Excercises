import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  count = 0;

  increment(){
    this.count ++;
  }

  decrement(){
    this.count --;
  }

  clear(){
    this.count = 0;
  }


}
