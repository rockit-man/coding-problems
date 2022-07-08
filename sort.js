export const bubbleSort = list => {
    if (!Array.isArray(list)) return []
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length; j++) {
            if (list[i] < list[j]) {
                let temp = list[j]
                list[j] = list[i];
                list[i] = temp;
            }
        }
    }
    return list
}