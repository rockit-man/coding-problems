export const factorial = num => {
    if (num !== null && num !== undefined && num >= 0) {
        if (num === 0 || num === 1) return num;
        
        return num * factorial(num - 1);
    } 

    return 'Missing or negative number'

}