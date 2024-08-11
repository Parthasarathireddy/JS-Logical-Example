function numberTrianglePattern(rows) {
    let output = '';
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= i; j++) {
            output += j + ' ';
        }
        output += '\n';
    }
    return output;
}

// Example usage:
console.log(numberTrianglePattern(5));