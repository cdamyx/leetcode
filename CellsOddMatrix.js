/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
    let counter = 0;
    
    //neat way to create zeroed matrix
    let matrix = Array(n).fill().map(() => Array(m).fill(0));
    
	//add one to each value in appropriate row
	for (let i = 0; i < indices.length; i++) {
		for (let j = 0; j < m; j++)
		matrix[indices[i][0]][j] += 1;
        
    //add one to each value in appropriate column
    for (let j = 0; j < n; j++)
		matrix[j][indices[i][1]] += 1;
	}
  
	//check whether each value in matrix is odd and increment counter if so
	for (i = 0; i < n; i++) {
		for (j = 0; j < m; j++) {
			if (matrix[i][j] % 2 != 0) {
				counter++;
			}
		}
	}
	return counter;
};