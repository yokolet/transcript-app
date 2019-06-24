import { WORDLIST } from '../constants/actions';
import { createWordList } from '../utils/helper';

export const updateWordList = (text) => {
  return {
     type: WORDLIST,
     wordList: createWordList(text)
  }
}