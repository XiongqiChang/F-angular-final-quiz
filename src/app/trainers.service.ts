import { Trainer } from './trainers/trainer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TrainersSerice{ // TODO GTB-4: - 拼写错误
    constructor(private httpclient: HttpClient) { // TODO GTB-4: - 成员变量命名应该采用camelCase
    }

    getTrainers(): Observable<Trainer[]> {
        return this.httpclient.get<Trainer[]>('http://localhost:8080/trainers?grouped=false');
    }


    // TODO GTB-3: - 字符串基础类型应该用小写的string声明
    addTrainer(name: String): Observable<Trainer>{
        return this.httpclient.post<Trainer>('http://localhost:8080//trainers',null);
    }

 }
