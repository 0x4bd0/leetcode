/**
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = (strs) => {
    
    if(strs.length == 1) return strs.pop()
    
    let prefix = ""
    let checkWord = strs.shift().split('')
    
    for(let i = 1; checkWord.length >= i; i++){
        
        let prefixTest = checkWord.slice(0 , i).join('')

        for(let j = 0; strs.length > j; j++){

            if(prefixTest !== strs[j].slice(0, i)){
                return prefix
            }
            
        }
        
     prefix = prefixTest
     
    }
    
    return prefix
}
