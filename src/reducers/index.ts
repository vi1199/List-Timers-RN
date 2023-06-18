import {combineReducers} from 'redux';
import appSlice from './app.slice';

export const rootReducer = combineReducers({
  appSlice: appSlice,
});
