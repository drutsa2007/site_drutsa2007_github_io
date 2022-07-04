import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
//import themeReducer from './themeSlice';
//import authReducer from './authSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    //theme: themeReducer,
    //auth: authReducer,
  },
})