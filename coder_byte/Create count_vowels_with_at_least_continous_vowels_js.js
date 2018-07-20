function threeVowels(string){
  let arr = string.split(' ');
  let count =0;
  
  const pattern = /[aeiou]{3,}/gi;
  
  for(let word of arr){
    if(word.match(pattern) !== null){
      count+=1
    }
  }
  
  return count;
}
