import {
    combineReducers,
    configureStore,
  } from '@reduxjs/toolkit';
  
  const reducers = combineReducers({
    // [userApi.reducerPath]: userApi.reducer,
  });
  
  export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        // .concat(loginApi.middleware),
  });
  
  // export type RootState = ReturnType<typeof store.getState>;
  // export type AppDispatch = typeof store.dispatch;
  