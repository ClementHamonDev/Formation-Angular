import { createReducer, on } from '@ngrx/store';
import { addTask, removeTask, Task } from './tasks.actions';

export const initialState: Task[] = [
{
    id: 1,
    title: 'Task 1',
    deadline: '2023-10-01',
    assignedTo: 'User A',
    status: 'À faire'
},
{
    id: 2,
    title: 'Task 2',
    deadline: '2023-10-05',
    assignedTo: 'User B',
    status: 'En cours'
},
{
    id: 3,
    title: 'Task 3',
    deadline: '2023-10-10',
    assignedTo: 'User C',
    status: 'Terminée'
}
];

export const taskReducer = createReducer(
  initialState,
  on(addTask, (state, { task }) => [...state, task]),
  on(removeTask, (state, { id }) => state.filter(task => task.id !== id))
);