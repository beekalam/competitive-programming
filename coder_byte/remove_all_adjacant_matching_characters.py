def removePairs(string):
  str = ''
  i = 0
  
  while i < len(string):
    if i == len(string) - 1:
      result += string[i]
    elif string[i] != string[i+1]:
      result += string[i]
    else:
      i += 1
    i += 1
 return result
