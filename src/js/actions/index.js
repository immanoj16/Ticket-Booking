export const CREATE_USER = 'CREATE_USER'
export const CHANGE_NAME = 'CHANGE_NAME'

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
