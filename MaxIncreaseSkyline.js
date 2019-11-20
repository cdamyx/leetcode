/**
 * @param {number[][]} grid
 * @return {number}
 */
 
/*Other user's answer
 transpose = m => m[0].map((x,i) => m.map(x => x[i]))

var maxIncreaseKeepingSkyline = function(grid) {
    let rowMaxes = grid.map( row => Math.max(...row))
    let colMaxes = transpose(grid).map( row => Math.max(...row))
    
    let increase = 0;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++){
            let newTotal = Math.min(rowMaxes[i], colMaxes[j])
            increase += newTotal - grid[i][j];
        }
    }
    return increase
};
*/
  
var maxIncreaseKeepingSkyline = function(grid) {
let colMax = [];
let rowMax = [];

	for (let i = 0; i < grid[0].length; i++) {
		let column = [];
		
		for (let j = 0; j < grid[0].length; j++) {
			
			column[j] = grid[j][i];
      
		}
    colMax[i] = Math.max(...column);
		rowMax[i] = Math.max(...grid[i]);
    }
  let result = 0;
  for (i = 0; i < grid.length; i++) {
  	for (j = 0; j < grid.length; j++) {
    	result += Math.min(colMax[i], rowMax[j]) - grid[i][j];
    }
  }
  return result;
};