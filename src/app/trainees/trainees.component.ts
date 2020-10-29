import { TraineeSerice } from './../trainee.service';
import { Component, OnInit } from '@angular/core';
import {Trainee} from './trainee'

@Component({
  selector: 'app-trainees',
  templateUrl: './trainees.component.html',
  styleUrls: ['./trainees.component.scss']
})
export class TraineesComponent implements OnInit {

  trainees: Trainee[];

  constructor(private traineesService: TraineeSerice) { }

  ngOnInit(): void {
    this.traineesService.getTrainees().subscribe(trainees => this.trainees = trainees);
  }

}
