function chunkArray(array, chunkSize) {
    // Initialize empty array to hold chunks
    let chunks = [];

    // Loop through array and slice it into chunks
    for (let i = 0; i < array.length; i += chunkSize) {
        let chunk = array.slice(i, i + chunkSize);
        chunks.push(chunk);
    }

    return chunks;
}

// Example usage:
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let chunkSize = 3;
let chunkedArray = chunkArray(myArray, chunkSize);

console.log(chunkedArray);

o/p:
[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

