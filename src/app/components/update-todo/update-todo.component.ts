import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css'],
})
export class UpdateTodoComponent {
  @Input() tasks: any[] = [];
  taskid: any;
  TaskTitle: string = '';
  status:string='';

  constructor(private router: Router) {}

  updateTask() {
    console.log('Task ID:', this.taskid);
    console.log('Task Title:', this.TaskTitle);
    console.log('Task status:', this.status);

    const index:number = this.tasks.findIndex(task => task.id == this.taskid);

    if (index !== -1) {
      this.tasks[index].title = this.TaskTitle;
      this.tasks[index].status = this.status;
      console.log('Updated tasks array:', this.tasks);
    }

    // Redirect to todo-list page after updating the task
    // this.router.navigate(['/']);
  }
}
