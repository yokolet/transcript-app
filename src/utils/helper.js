export const createWordList = (text) => {
  let wordList = [];
  let w = '';
  let wordFlag = false;
  for(let i=0; i<text.length; i++){
    if(wordFlag && w.length > 0){
      wordList.push(w);
      w = ''
      wordFlag = false
    }
    if(text[i] === ' ' || text[i] === '\n'){
      wordFlag = true
    }else{
      wordFlag = false
      w += text[i]
    }
  }
  if(w.length > 0) {
    wordList.push(w)
  }
  return wordList
}