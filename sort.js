export const swap = (first, second) => {
    let temp = second;
    second = first;
    first = temp;

    return { first, second }
}

export const bubbleSort = list => {
    if (!Array.isArray(list)) return []
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length; j++) {
            if (list[i] < list[j]) {
                const { first, second } = swap(list[i], list[j]);
                list[i] = first;
                list[j] = second;
            }
        }
    }
    return list
}

export const reverseString = str => {
    if(typeof(str) !== "string" || !str) return "";
    let list = str.split('');

    const findMidpoint = (isEven, len) => isEven ? len/2 : Math.floor((len/2) + 1);
    let isEven = list.length % 2 === 0 || false;

    let lastEl = list.length - 1;
    let firstHalf = list.slice(0, list.length / 2);

    let lastElOfFirstHalf = firstHalf.length - 1;
    
    for(let i = 0; i < list.length / 2; i++) {
        list[i] = list[lastEl];
        lastEl--;
    }

    for(let i = findMidpoint(isEven, list.length); i < list.length; i++) {
        list[i] = firstHalf[lastElOfFirstHalf];
        lastElOfFirstHalf--;
    }

    return list.join('');   
}