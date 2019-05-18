var varFuncName = (function(params){
  console.log("Appears to be working: "+params);
})("true")//immediately invoked due to additional sets of brackets
const SYMBOLIC_CONSTANT = 3.14;


function logScope(){
  let  local =2;
  if (local) {
    let local = "Something else";
    console.log(local);
  }

  console.log(local);
}

logScope();
