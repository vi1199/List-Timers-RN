import {configureStore} from '@reduxjs/toolkit';
import logger from './middleware/logger';
import monitorReducerEnhancer from './enhancers/monitorReducer';
import {rootReducer} from '../reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
  enhancers: [monitorReducerEnhancer],
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
