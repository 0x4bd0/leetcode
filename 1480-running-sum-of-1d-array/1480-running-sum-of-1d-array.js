/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = nums => {
    
    let tmp = []
    
    for(let i = 1; nums.length >= i; i++ ){
        tmp.push(nums.slice(0, i))
    }
    
    return tmp.map(item => item.reduce((a,b)=> a+b))
    
};