import {createReducer, on} from '@ngrx/store';
import {increment, decrease, reset, incrementByNumber, incrementBy10, divideBy2} from './counter.actions';

export const initialState = 0;

const _counterReducer = createReducer(
    initialState,
    on(increment, (state) => state + 1),
    on(decrease, (state) => state - 1),
    on(reset, () => initialState),
    on(incrementBy10, (state) => state + 10),
    on(divideBy2, (state) => state / 2),
    on(incrementByNumber, (state, {combien}) => state + combien),
   
)

export function counterReducer(state: any, action: any){
    return _counterReducer(state, action);
}