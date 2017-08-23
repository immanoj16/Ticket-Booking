import { BOOK_TOGGLE } from "../actions";

const initialState = {
  bookState: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case BOOK_TOGGLE:
      return action.payload
    default:
      return state
  }
}