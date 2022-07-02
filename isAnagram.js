const isAnagram = (str1 , str2) => {
    return str1.toLowerCase().split('').sort().join('') === 
           str2.toLowerCase().split('').sort().join('')      
}

const stringSplit = (str, arr = []) => {
    for(let i = 0; i < str.length; i++) {
        arr.push(str[i])
   }
   return arr;
}

const isAnagramWithSplit = (str1, str2) => {
    return stringSplit(str1.toLowerCase()).sort().join('') === 
           stringSplit(str2.toLowerCase()).sort().join('')
}