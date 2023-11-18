import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

  @Input() tasks: any[] = [];

  // this property is the one set in the ngModel input field in the html template
  // here: [(ngModel)]="newTaskTitle"
  // the name="newTaskTitle" is crucial too and should be added 
  newTaskTitle: string = '';

  addTask() {
    // Create a new task object using the form input
   const task = {
      id: Date.now(),
      title: this.newTaskTitle,
      status: 'Started'
    };

    // Add the new task to the tasks array
    this.tasks.push(task);

    // Clear the form input for the next task
    this.newTaskTitle = '';
  }
}
