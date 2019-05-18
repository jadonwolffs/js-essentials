var theBiggest = function(a,b) {//anonymous functions called by var name (essentially a function by the var name)
    var result;
    a>b ? result = ["a", a] : result = ["b", b];
    return result;
}

console.log(theBiggest(7/9,13/25));//providing prameters to anonymous functions
