function countMultiples(numbers) {
    const result = {};
    const divisors = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    for (const divisor of divisors) {
        result[divisor] = 0;
        for (const num of numbers) {
            if (num % divisor === 0) {
                result[divisor]++;
            }
        }
    }
    
    return result;
}

// Example usage:
const input = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
const output = countMultiples(input);
console.log(output);