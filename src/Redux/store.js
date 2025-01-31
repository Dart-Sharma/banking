import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from '../Redux/slice/userSlice';
import addCardDetailsSlice  from './slice/AddCardDetails';

import {thunk} from 'redux-thunk';

const rootReducer = combineReducers({
  user: userSlice,
  cardDetailsList: addCardDetailsSlice
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
});

export default store;


