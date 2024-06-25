import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  tasks: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadTasks();
  }

  ionViewWillEnter() {
    this.loadTasks();
  }

  loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    this.tasks = tasks;
  }

  editTask(task: any) {
    this.router.navigate(['/create-edit-task', { task: JSON.stringify(task) }]);
  }
}
