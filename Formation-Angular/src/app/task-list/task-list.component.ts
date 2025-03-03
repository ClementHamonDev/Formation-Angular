import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addTask, removeTask, Task } from '../store/tasks.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: "./task-list.component.html",
  styleUrl: "./task-list.component.css"
})
export class TaskListComponent {

  tasks$: Observable<Task[]>;

  constructor(private store: Store<{tasks: Task[]}>) {
    this.tasks$ = this.store.select('tasks');
  }

  addNewTask() {
    const newTask: Task = {
      id: Math.random(),
      title: 'Nouvelle tâche',
      deadline: '2025-12-31',
      assignedTo: 'John Doe',
      status: 'À faire'
    };
    this.store.dispatch(addTask({ task: newTask }));
  }

  deleteTask(id: number) {
    this.store.dispatch(removeTask({ id }));
  }
}
