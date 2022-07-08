import { bubbleSort } from "./sort"

export const isAnagram = (str1 , str2) => {
    return bubbleSort(str1.toLowerCase().split('')).join('') ===
    bubbleSort(str2.toLowerCase().split('')).join('');
}

export const stringSplit = (str, arr = []) => {
    if(!str || typeof(str) !== 'string') return ''
    for(let i = 0; i < str.length; i++) {
        arr.push(str[i])
   }
   return arr;
}

export const isAnagramWithSplit = (str1, str2) => {

    return bubbleSort(stringSplit(str1.toLowerCase())).join('') === 
           bubbleSort(stringSplit(str2.toLowerCase())).join('')
}