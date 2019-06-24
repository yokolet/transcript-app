import { TRANSCRIPTS } from '../constants/actions';

export const updateTranscripts = (data) => {
  return {
     type: TRANSCRIPTS,
     english: data.english,
     katakana: data.katakana,
  }
}