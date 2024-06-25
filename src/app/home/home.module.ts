import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

import { TaskListComponent } from '../task-list/task-list.component';
import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    TaskListComponent
  ]
})
export class HomeModule {}
