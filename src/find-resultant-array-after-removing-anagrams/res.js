/**
 * @param {string[]} words
 * @return {string[]}
 */
 var removeAnagrams = function(words) {
  const deleted = []
  for(let i = 1; i < words.length; i++) {
      if(check(words[i], words[i-1])) {
          deleted.push(i)
      }
  }
  return words.filter((item, index) => !deleted.includes(index))
};

function check(w1, w2) {
  const w1ist = w1.split("");
  const w2List = w2.split("");
  if(w1ist.sort().toString() == w2List.sort().toString()){
      return true;
  }else{
      return false;
  }
}