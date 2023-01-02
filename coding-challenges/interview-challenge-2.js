/* Write a function to Reverse a string
Example:
Input: Jereme
Output: emereJ */

export const reverseStr = (str) => {
    let reverseStr = '';
    if (!str) {
        return '';
    }
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    return reverseStr;
}

// alternate solution

// export const reverseStr = (str) => {
//     if (!str) {
//         return '';
//     } else {
//         return str.split("").reverse().join("");
//     }
// }
