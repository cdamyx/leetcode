/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

/*Original
var numJewelsInStones = function(J, S) {
    let total = 0;
    for (let i = 0; i < S.length; i++) {
        for (let k = 0; k < J.length; k++) {
            if (J[k] === S[i]) {
                total++;
            }
        }
    }
    return total;
    
};
*/

//Variation 1
var numJewelsInStones = function(J, S) {
    let jewels = new Set(J);
    let numOfJewels = 0;
    for (let i = 0; i < S.length; i++) {
        if (jewels.has(S.charAt(i))) numOfJewels++;
    }
    return numOfJewels;
};