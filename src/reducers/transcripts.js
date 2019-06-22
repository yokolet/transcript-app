import { TRANSCRIPTS } from '../constants/actions'

const initialState = {
  english: [],
  katakana: []
}

const transcripts = (state = initialState, action) => {
  switch (action.type) {
    case TRANSCRIPTS:
      return {
        ...state,
        english: action.english ? action.english : [],
        katakana: action.katakana ? action.katakana : []
      }
    default:
      return state
  }
}

export default transcripts
