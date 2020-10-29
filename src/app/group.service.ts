import { Group } from './groups/group';
import { Trainee } from './trainees/trainee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class GroupService{

    constructor(private httpclient: HttpClient) {
    }

    getGroups(): Observable<Group[]> {
        return this.httpclient.get<Group[]>('http://localhost:8080/groups');
    }
    
    autoGroup(): Observable<Group[]>{
        return this.httpclient.post<Group[]>('http://localhost:8080/groups/auto-grouping',null);
    }
}