import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export type timerObj = {
  addedTime: string;
};
interface AppState {
  timer: Array<timerObj>;
}

const initialState: AppState = {
  timer: [],
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTimerAction: (state: AppState, action: PayloadAction<null | any>) => {
      state.timer = [...state.timer, action.payload];
    },
    removeTimerAction: (state: AppState, action: PayloadAction<timerObj>) => {
      state.timer = state.timer.filter(
        item => item.addedTime !== action.payload.addedTime,
      );
    },
  },
});

export const {setTimerAction, removeTimerAction} = appSlice.actions;

export default appSlice.reducer;
