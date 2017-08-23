import { CREATE_USER, SET_SEAT_NUMBER, CONFIRM_BOOKING } from "../actions"

const initialState = {
  name: '',
  seatCount: null,
  seatDetails: [],
  bookState: false,
  bookConfirm: false
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
    case SET_SEAT_NUMBER:
      return {
        ...state,
        seatDetails: [...state.seatDetails, action.payload]
      }
    case CONFIRM_BOOKING:
      return {
        ...state,
        bookConfirm: action.payload
      }
    default:
      return state
  }
}