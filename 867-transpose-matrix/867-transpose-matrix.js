/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

const transpose = matrix => {
    
    let response = []
    
    while(matrix[0].length > 0){
        response.push( matrix.map( item=>( item.shift() ) ) )
    }
    
    return response
    
}
