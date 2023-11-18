import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
    tasks: any[] = [
      { id: 1, title: 'Learn Angular', status: 'Ongoing' },
      { id: 2, title: 'Build Todo App', status: 'Done' },
      { id: 3, title: 'Build Todo App', status: 'Ongoing' },
    ];


    deleteTask(id: number) {
      console.log(id);
      const index = this.tasks.findIndex(task => task.id === id);
      if (index !== -1) {
        this.tasks.splice(index, 1);
      }
    }
    
}
