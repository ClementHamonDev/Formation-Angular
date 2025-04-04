import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideStore, StoreModule} from '@ngrx/store';
import { counterReducer } from './app/store/counter.reducers';
import { provideEffects } from '@ngrx/effects';
import { taskReducer } from './app/store/tasks.reducers';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({count: counterReducer, tasks: taskReducer}),
    provideEffects([]),
    ...appConfig.providers
  ]
}).catch(err => console.error(err));
