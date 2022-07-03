export const isAnagram = (str1 , str2) => {
    return str1.toLowerCase().split('').sort().join('') === 
           str2.toLowerCase().split('').sort().join('')      
}

export const stringSplit = (str, arr = []) => {
    if(!str || typeof(str) !== 'string') return ''
    for(let i = 0; i < str.length; i++) {
        arr.push(str[i])
   }
   return arr;
}

export const isAnagramWithSplit = (str1, str2) => {


    return stringSplit(str1.toLowerCase()).sort().join('') === 
           stringSplit(str2.toLowerCase()).sort().join('')
}