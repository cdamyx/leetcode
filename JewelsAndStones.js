/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
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