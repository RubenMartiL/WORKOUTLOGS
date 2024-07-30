import { Component } from '@angular/core';
import exercises from '../../../assets/exercises.json';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss'],
  standalone: true,
  imports: []
})
export class ExercisesComponent {
  exercises: any[] = []; 
  exercises_categories: any[] = exercises.map((exercise) => exercise.Category).filter((value, index, self) => value !== undefined && self.indexOf(value) === index);
  exercises_difficulty: any[] = exercises.map((exercise) => exercise.Difficulty).filter((value, index, self) => value !== undefined && self.indexOf(value) === index);
  exercises_force: any[] = exercises.map((exercise) => exercise.Force).filter((value, index, self) => value !== undefined && self.indexOf(value) === index);
  exercises_grips: any[] = exercises.map((exercise) => exercise.Grips).filter((value, index, self) => value !== undefined && self.indexOf(value) === index);
  page: number = 1;
  page_size: number = 12;
  total_pages: number = Math.ceil(exercises.length / this.page_size);
  search: string = '';

  constructor() {
    this.exercises = exercises.slice(0, this.page_size);
  }

  nextPage(){
    if(this.page >= this.total_pages) return;
    this.page += 1;
    this.exercises = exercises.slice((this.page - 1) * this.page_size, this.page * this.page_size);
  }

  beforePage(){
    if(this.page <= 1) return;
    this.page -= 1;
    this.exercises = exercises.slice((this.page - 1) * this.page_size, this.page * this.page_size);
  }

  searchExercise(){
    this.exercises = exercises.filter((exercise) => exercise.exercise_name.toLowerCase().includes(this.search.toLowerCase())).slice(0, this.page_size);
  }
}
