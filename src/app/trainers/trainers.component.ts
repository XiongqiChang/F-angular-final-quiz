import { Trainer } from './trainer';
import { TrainersSerice } from './../trainers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss']
})
export class TrainersComponent implements OnInit {

  trainers: Trainer[];
  constructor(private trainersService: TrainersSerice) { }

  ngOnInit(): void {
    this.trainersService.getTrainers().subscribe(trainer => this.trainers = trainer); // TODO GTB-4: - 回调函数入参命名不正确
  }

}
