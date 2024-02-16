// store/index.js
// import {  combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoReducer';

const store = configureStore({
    reducer: {
      todos: todoReducer
    }
  });
  
  export default store;