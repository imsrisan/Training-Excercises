import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { FrontComponent } from './front/front.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { WeatherComponent } from './weather/weather.component';

export const routes: Routes = [{
    path: 'counter',
    component: CounterComponent
}, {
    path : 'to-do-list',
    component : ToDoListComponent
}

,{
    path : '',
    component : FrontComponent
}, {
    path : 'weather',
    component: WeatherComponent
}
];
