/* Write a function to Reverse a string
Example:
Input: Jereme
Output: emereJ */

export const reverseStr = (str) => {
    let reverseStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    return reverseStr;
}