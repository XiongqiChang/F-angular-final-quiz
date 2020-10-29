import { Trainer } from '../trainers/trainer';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss']
})
export class TrainerComponent implements OnInit {

  @Input() trainer: Trainer;

  constructor() { }

  ngOnInit(): void {
  }

}
