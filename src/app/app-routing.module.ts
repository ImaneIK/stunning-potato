import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { UpdateTodoComponent } from './components/update-todo/update-todo.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { AppComponent } from './app.component';
import { FacturesComponent } from './components/factures/factures.component';

const routes: Routes = [
  {path:'', component:FacturesComponent},
  {path:'add-todo',component:TodoListComponent},
  {path:'update',component:UpdateTodoComponent},
  {path:'todo-details',component:TodoDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
