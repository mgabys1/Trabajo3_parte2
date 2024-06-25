import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskNotificationService } from '../task-notification.service';

@Component({
  selector: 'app-create-edit-task',
  templateUrl: './create-edit-task.page.html',
  styleUrls: ['./create-edit-task.page.scss'],
})
export class CreateEditTaskPage implements OnInit {
  taskName: string = '';
  taskDueDate: string = '';
  isEditMode: boolean = false;
  originalTask: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskNotificationService: TaskNotificationService
  ) {}

  ngOnInit() {
    const taskData = this.route.snapshot.paramMap.get('task');
    if (taskData) {
      this.originalTask = JSON.parse(taskData);
      this.taskName = this.originalTask.task_name;
      this.taskDueDate = this.originalTask.task_due_date;
      this.isEditMode = true;
    }
  }

  saveTask() {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

   // Crear objeto con los datos de la nueva tarea
    const newTask = {
      task_name: this.taskName,
      task_due_date: this.taskDueDate,
      task_completed: false,
      task_created_at: new Date().toISOString(),
    };

    if (this.isEditMode) {
      const taskIndex = tasks.findIndex(
        (task: any) => task.task_created_at === this.originalTask.task_created_at
      );

      if (taskIndex > -1) {
        tasks[taskIndex].task_name = this.taskName;
        tasks[taskIndex].task_due_date = this.taskDueDate;
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // Actualiza la notificación si la fecha de vencimiento ha cambiado
        const dueDate = new Date(this.taskDueDate);
        this.taskNotificationService.scheduleNotification(this.taskName, dueDate);
      }
    } else {
      const newTask = {
        task_name: this.taskName,
        task_due_date: this.taskDueDate,
        task_completed: false,
        task_created_at: new Date().toISOString(),
      };

      tasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(tasks));

      if (this.taskDueDate) {
        const dueDate = new Date(this.taskDueDate);
        this.taskNotificationService.scheduleNotification(this.taskName, dueDate);
      }
    }

    this.router.navigate(['/home']);
  }
}