let birbArr = ['Northern Cardinal', 'Gray Catbird', 'Carolina Wren'];

const smolBirbs = (arr) => {
    let smolArr = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase();
        smolArr.push(arr[i]);
    }
    return smolArr;
};

console.log(smolBirbs(birbArr));

/* Took me almost 15 additional minutes, but I finally figured it out.
I was focusing on the lowercase string function because that was the
line the error was catching on. You told me to look into looping through
arrays again, so that's where I started. I didn't set up my for loop
correctly and I needed to update my arr[i] values. */