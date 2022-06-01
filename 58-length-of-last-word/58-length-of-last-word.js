/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLastWord = s => {
    let tmp = s.split(' ')
    let result = 0

     while(!result && tmp.length > 0){
         let x = tmp.pop().replace(' ', '')
         if(x.length > 0) {
             result = x.length
         }
     }
    
    return result
}