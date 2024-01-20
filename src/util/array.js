/**
 * shuffle the array
 * @param arr {Array}
 * @return {Array}
 */
function shuffleArray(arr) {
    return arr.map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
}

export { shuffleArray }
