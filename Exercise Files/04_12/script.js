function doSomeMath() {
	var a = 5;//closure keeps these guys alive
	var b = 4;
	var sum = a + b;

	// return sum;
	function inner(){//this is a closure
		var pro = a*b;
		return pro;
	}
	// return inner;
	return inner();//can put return inner() here?
}

var theResult = doSomeMath();

console.log("The result: ", theResult);
// console.log("The result: ", theResult());

function giveMeEms(pixels){
	var base = 16;
	function math(){
		return pixels/base;
	}
	return math;
}

var small = giveMeEms(12);
var med = giveMeEms(18);
var large = giveMeEms(24);
console.log("Ems ",small(),med(),large());
