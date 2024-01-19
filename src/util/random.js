/**
 * Get random integer (min included, max excluded)
 * @param min { number }
 * @param max { number }
 * @return number
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export { getRandomInt };
