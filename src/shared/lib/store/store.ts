import { fileApi } from '@/shared/api/fileApi';
import {
    combineReducers,
    configureStore,
  } from '@reduxjs/toolkit';
  
  const reducers = combineReducers({
    [fileApi.reducerPath]: fileApi.reducer,
  });
  
  export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(fileApi.middleware),
  });
  
  // export type RootState = ReturnType<typeof store.getState>;
  // export type AppDispatch = typeof store.dispatch;
  