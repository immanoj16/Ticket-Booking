export const BOOK_TOGGLE = 'BOOK_TOGGLE'

export const bookToggle = (bookState) => {
  return {
    type: BOOK_TOGGLE,
    payload: !bookState
  }
}