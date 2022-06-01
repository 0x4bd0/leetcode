/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    const map = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    
    let queue = []
    
    for(let i = 0; s.length > i; i++){  
    (queue.length > 0 && s[i] === map[ queue[queue.length-1] ] ) ? queue.pop() : queue.push(s[i])
    }
    
    return !queue.length
};
