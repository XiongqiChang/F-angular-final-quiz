import { Trainer } from './../trainers/trainer';
import { Trainee } from './../trainees/trainee';
export interface Group{
    name: number;
    trainees: Trainee[];
    trainers: Trainer[];

}