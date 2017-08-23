export const CREATE_USER = 'CREATE_USER'
export const SET_SEAT_NUMBER = 'SET_SEAT_NUMBER'
export const CONFIRM_BOOKING = 'CONFIRM_BOOKING'

export const createUser = (name, seatCount, bookState) => {
  return {
    type: CREATE_USER,
    payload: {
      name,
      seatCount,
      bookState
    }
  }
}

export const setSeatNumber = (seatDetails) => {
  return {
    type: SET_SEAT_NUMBER,
    payload: seatDetails
  }
}

export const confirmBooking = () => {
  return {
    type: CONFIRM_BOOKING,
    payload: true
  }
}