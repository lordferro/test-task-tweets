import { configureStore} from '@reduxjs/toolkit';
import { tweetsApi } from './tweetsApi';

export const store = configureStore({
  reducer: {
    [tweetsApi.reducerPath]: tweetsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(tweetsApi.middleware),
});
