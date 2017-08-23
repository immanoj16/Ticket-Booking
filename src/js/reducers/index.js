import { combineReducers } from 'redux';

import BookReducer from './BookReducer'

const rootReducer = combineReducers({
  user: BookReducer
});

export default rootReducer;