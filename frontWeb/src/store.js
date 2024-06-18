import { combineReducers } from 'redux';
import { configureStore, Tuple } from '@reduxjs/toolkit';
import { reducer as toastrReducer } from 'react-redux-toastr';

const rootReducer = combineReducers({
  toastr: toastrReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;
