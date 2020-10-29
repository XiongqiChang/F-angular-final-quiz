import { Trainee } from './../trainees/trainee';
import { Group } from './../groups/group';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  @Input() group: Group
  

  constructor() { }
 
  ngOnInit(): void {
  }

}
