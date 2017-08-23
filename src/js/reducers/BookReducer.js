import { CREATE_USER } from "../actions";

const initialState = {
  name: '',
  seatCount: null,
  seatDetails: [],
  bookState: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        name: action.payload.name,
        seatCount: action.payload.seatCount,
        bookState: action.payload.bookState
      }
    default:
      return state
  }
}