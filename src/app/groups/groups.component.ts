import { Component, OnInit } from '@angular/core';
import { Group } from './group';
import { GroupService } from './../group.service';


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  groups: Group[];
  constructor(private groupService:GroupService) { }

  // TODO GTB-4: - console.log不应出现在最终代码里
  ngOnInit(): void {
    this.groupService.getGroups().subscribe(groups => {
      console.log(groups);
      this.groups = groups;
    })
  }
  autoGroup(): void{
    this.groupService.autoGroup().subscribe(
      groups => {
        console.log(groups);
        this.groups = groups;
      }
    )
  }
}
