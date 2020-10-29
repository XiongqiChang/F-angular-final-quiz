import { Trainer } from './trainers/trainer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TrainersSerice{
    constructor(private httpclient: HttpClient) {
    }

    getTrainers(): Observable<Trainer[]> {
        return this.httpclient.get<Trainer[]>('http://localhost:8080/trainers?grouped=false');
    }
    

    addTrainer(name: String): Observable<Trainer>{
        return this.httpclient.post<Trainer>('http://localhost:8080//trainers',null);
    }
        
 } 