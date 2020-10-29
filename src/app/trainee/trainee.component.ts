import { Trainee } from './../trainees/trainee';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainee',
  templateUrl: './trainee.component.html',
  styleUrls: ['./trainee.component.scss']
})
export class TraineeComponent implements OnInit {
  
  @Input()  trainee :Trainee
  constructor() { }

  ngOnInit(): void {
  }

}
