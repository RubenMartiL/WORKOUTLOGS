import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { MenuComponent } from "../../components/menu/menu.component";
import { HomeComponent } from '../home/home.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { ExercisesComponent } from '../exercises/exercises.component';

@Component({
  selector: 'app-core',
  templateUrl: 'core.html',
  styleUrls: ['core.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, MenuComponent, MenuComponent, HomeComponent, CalendarComponent, ExercisesComponent],
})
export class Core {
  menu_selected: number = 0;
  constructor() { }

  changeMenuSelected(index: number) {
    this.menu_selected = index;
  }
}
