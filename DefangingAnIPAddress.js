/**
 * @param {string} address
 * @return {string}
 */

/*
**variation 1
var defangIPaddr = function(address) {
    return address.split('.').join('[.]');
};

**variation 2
var defangIPaddr = function(address) {
    let regex = /\./g;

	return address.replace(regex, "[.]");

};
*/

//variation 3
var defangIPaddr = function(address) {
    let newStr = "";
    
    for(i = 0; i < address.length; i++) {
        if (address[i] === ".") 
            newStr += "[.]";
        
        else 
            newStr += address[i];
        
    }
    return newStr;
}

