console.log("hi");


var a = [1, 2, 3];
a.join(' ');  //"1 2 3"


//challenge 1

var test = "cat";

// ["c", "a", "t"]  = > ["t", "a", "c"]
var opp = test.split("").reverse().join("");

if(test === opp){
  console.log("same? ", true);
}else{
  console.log("same? ", false);
}