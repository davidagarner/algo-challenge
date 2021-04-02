/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function chunkArray(array,size) {
    var a = array.concat();
    for(var i = 0; i<a.length; ++i) {
        for(var j = i+1 ; j<a.length ; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }
    return a;
}


module.exports = chunkArray