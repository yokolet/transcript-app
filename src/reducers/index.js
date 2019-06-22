import { combineReducers } from 'redux';
import transcripts from './transcripts';
import wordlist from './wordlist';

export default combineReducers({
  wordlist,
  transcripts,
});