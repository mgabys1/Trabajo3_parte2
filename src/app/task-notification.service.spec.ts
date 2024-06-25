import { Injectable } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Injectable({
  providedIn: 'root'
})
export class TaskNotificationService {

  constructor(private localNotifications: LocalNotifications) {}

  scheduleNotification(taskName: string, taskDueDate: Date) {
    this.localNotifications.schedule({
      title: 'Tarea Pendiente',
      text: `Recuerda completar la tarea: ${taskName}`,
      trigger: { at: taskDueDate },
    });
  }
}
