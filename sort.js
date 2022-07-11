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