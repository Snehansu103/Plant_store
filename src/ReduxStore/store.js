import { configureStore } from '@reduxjs/toolkit';
import { thunk }  from 'redux-thunk';
// import rootReducer from './Reducers/productsReducer';
import { rootReducer } from './Reducers/index';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
