import { combineReducers, applyMiddleware } from 'redux';
import {countReducer} from '../reducers/CountReducer'
import {busyErrorReducer} from '../reducers/BusyErrorReducer'

export const AppReducers = combineReducers({
    countReducer,
    busyErrorReducer,
});

