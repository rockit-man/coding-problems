/* Write a function that takes in an array containing capitalized
bird names and return an array with those names in all lowercase
letters */

// using a for loop
export const smolBirbs = (arr) => {
    let smolArr = [];
    if (!arr) {
        return 'Sorry. No birb array being passed in. Try again.'
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase();
        smolArr.push(arr[i]);
    }
    return smolArr;
}

/* Took me almost 15 additional minutes, but I finally figured it out.
I was focusing on the lowercase string function because that was the
line the error was catching on. You told me to look into looping through
arrays again, so that's where I started. I didn't set up my for loop
correctly and I needed to update my arr[i] values. */

//using arrow functions and the Array.map method
// const smolBirbs = (arr) => {
//     return arr.map(b => b.toLowerCase());
// };
