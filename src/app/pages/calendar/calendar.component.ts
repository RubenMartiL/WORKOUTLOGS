import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class CalendarComponent  implements OnInit {
  date: Date = new Date();
  day: number = this.date.getDate();
  month: number = this.date.getMonth();
  year: number = this.date.getFullYear();
  days: number[] = Array.from({ length: new Date(this.year, this.month + 1, 0).getDate() }, (_, i) => i + 1);
  days_name: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  month_name:string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  day_start: number = new Date(this.year, this.month, 1).getDay() - 1;
  day_start_empty: number[] = Array.from({ length: this.day_start }, (_, i) => i + 1);
  rows: number = Math.floor(this.days.length / 7)
  days_trained:number[] = [1,2,3,4,5,6,7,9,12,13,14,15,16,18,20,21,23,25,26,27,28,30,31];

  constructor() {}

  ngOnInit() {}

  nextMonth(){
    if(this.month == 11){
      this.month = 0;
      this.year = this.year + 1;
    }
    this.month = this.month + 1;
    this.days = Array.from({ length: new Date(this.year, this.month + 1, 0).getDate() }, (_, i) => i + 1);
    this.day_start = new Date(this.year, this.month, 1).getDay() - 1;
    this.day_start_empty = Array.from({ length: this.day_start }, (_, i) => i + 1);
  }

  beforeMonth(){
    if(this.month == 0){
      this.month = 11;
      this.year = this.year - 1;
    }
    this.month = this.month - 1;
    this.days = Array.from({ length: new Date(this.year, this.month + 1, 0).getDate() }, (_, i) => i + 1);
    this.day_start = new Date(this.year, this.month, 1).getDay() - 1;
    this.day_start_empty = Array.from({ length: this.day_start }, (_, i) => i + 1);
  }
}
