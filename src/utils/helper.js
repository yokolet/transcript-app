export const stripPunctuation = (word) => {
  let punctuations = ['.', ',', ':', '!', '?', '"', '”'];
  let left = 0
  let right = word.length - 1
  while(punctuations.indexOf(word[left]) >= 0) {
    left++;
  }
  while(punctuations.indexOf(word[right]) >= 0) {
    right--;
  }
  return word.slice(left, right+1)
}

export const createWordList = (text) => {
  let wordList = [];
  let w = '';
  let wordFlag = false;
  for(let i=0; i<text.length; i++){
    if(wordFlag && w.length > 0){
      w = stripPunctuation(w)
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
    w = stripPunctuation(w)
    wordList.push(w)
  }
  return wordList
}