/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = digits => ( (BigInt(digits.join('')) + 1n).toString().split('') )