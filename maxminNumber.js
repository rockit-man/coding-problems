export const findMax = list => {
    if(!Array.isArray(list) || list.length < 1 ) return []
    return list.sort((x, y) => x - y)[list.length-1];
}

export const findMaxMin = list => {
    let max = list[0];
    let min = list[list.length - 1]
    for(let i = 0; i < list.length; i++) {
        if(list[i] > max) max = list[i];
        if(list[i] < min) min = list[i]
    }

    return { max, min };
}