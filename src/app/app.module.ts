import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TrainersComponent } from './trainers/trainers.component';
import { TrainerComponent } from './trainer/trainer.component';
import { TraineesComponent } from './trainees/trainees.component';
import { TraineeComponent } from './trainee/trainee.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupComponent } from './group/group.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainersComponent,
    TrainerComponent,
    TraineesComponent,
    TraineeComponent,
    GroupsComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
