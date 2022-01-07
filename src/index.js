module.exports = function reverse (n) {
    let unsortedString = Math.abs(n).toString();
    let unsortedArray = unsortedString.split('');
    let finalNumber = unsortedArray.reverse().join('');
    return finalNumber;
}
