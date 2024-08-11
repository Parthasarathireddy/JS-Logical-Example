function numberDiamondPattern(rows) {
    let output = '';
    for (let i = 1; i <= rows; i++) {
        // Print spaces
        for (let j = 1; j <= rows - i; j++) {
            output += ' ';
        }
        // Print numbers in increasing order
        for (let k = 1; k <= i; k++) {
            output += k + ' ';
        }
        output += '\n';
    }
    for (let i = rows - 1; i >= 1; i--) {
        // Print spaces
        for (let j = 1; j <= rows - i; j++) {
            output += ' ';
        }
        // Print numbers in increasing order
        for (let k = 1; k <= i; k++) {
            output += k + ' ';
        }
        output += '\n';
    }
    return output;
}

// Example usage:
console.log(numberDiamondPattern(5));
