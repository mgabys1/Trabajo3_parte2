import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];

  constructor() { }

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    this.tasks = tasks;
  }
}