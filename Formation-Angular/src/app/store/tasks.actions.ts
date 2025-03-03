export type Task = {
    id: number;
    title: string;
    deadline?: string;
    assignedTo?: string;
    status?: 'À faire' | 'En cours' | 'Terminée';
};

import { createAction, props } from '@ngrx/store';

export const addTask = createAction('[Task] Add', props<{ task: Task }>());
export const removeTask = createAction('[Task] Remove', props<{ id: number }>());