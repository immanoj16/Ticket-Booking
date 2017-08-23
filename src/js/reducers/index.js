import { combineReducers } from 'redux';

import BookReducer from './BookReducer'

const rootReducer = combineReducers({
  bookState: BookReducer
});

export default rootReducer;