import { configureStore } from "@reduxjs/toolkit";
import settingsSliceReducer from "./slices/settingsSlice";
const mainStore = configureStore({
  reducer: {
    settings: settingsSliceReducer,
  },
});

export default mainStore;

export type RootState = ReturnType<typeof mainStore.getState>;
export type AppDispatch = typeof mainStore.dispatch;
