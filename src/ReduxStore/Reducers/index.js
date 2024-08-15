import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import loggedUserReducer from './loggedUserReducer';

export const rootReducer = combineReducers({
    products: productsReducer,
    loggedUser: loggedUserReducer
})

