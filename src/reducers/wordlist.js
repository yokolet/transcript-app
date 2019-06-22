import { WORDLIST } from '../constants/actions'

const initialState = {
  words: []
}

const wordlist = (state = initialState, action) => {
  switch (action.type) {
    case WORDLIST:
      return {
        ...state,
        words: action.wordList ? action.wordList : []
      }
    default:
      return state
  }
}

export default wordlist
