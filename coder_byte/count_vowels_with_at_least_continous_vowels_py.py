import re

def threeVowels(string):
    arr = string.split(' ')
    count =0

    for word in arr:
        if re.search(r'[aeiou]{3,}',word) != None:
            count += 1
    
    return count
