import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
})
export class TaskDetailComponent implements OnInit {
  taskName: string = ''; 
  task: Task | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.taskName = params.get('taskName') || '';
      this.loadTaskDetails();
    });
  }

  loadTaskDetails() {
    const tasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]');
    this.task = tasks.find((t: Task) => t.task_name === this.taskName);
  }
}