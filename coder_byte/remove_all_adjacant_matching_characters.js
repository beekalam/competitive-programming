function removePairs(string){
  let result = '';
  
  for(let i = 0; i < string.length; i++){
    if( i === string.length - 1){
      result += string[i];
     }
     else if(string[i] !== string[i+1]){
      result += string[i];
     }
     else{
      i += 1;
     }
  }
  
  return result;
}
