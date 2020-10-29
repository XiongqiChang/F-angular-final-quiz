import { Trainee } from './trainees/trainee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TraineeSerice{
    constructor(private httpclient: HttpClient) {
    }

    getTrainees(): Observable<Trainee[]> {
        return this.httpclient.get<Trainee[]>('http://localhost:8080/trainees?grouped=false');
      }
 } 