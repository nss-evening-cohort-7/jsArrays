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




var animals = ['fish', 'dog', 'cat'];
var animalzElement = document.getElementById('animalz');

for(var i=0; i<animals.length; i++){
  // console.log("animal", animals[i]);
  animalzElement.innerHTML += '<h5>' + animals[i] + '</h5>';
}


// Challenge 2

var book = "catch 202";
var bookSplit = book.split("");
var realNumz = [];
for(var j=0; j<bookSplit.length; j++){
  // console.log(bookSplit[j]*1);
  if(bookSplit[j]*1){
    realNumz.push(bookSplit[j]);
  }else if(bookSplit[j] === '0'){
    realNumz.push(bookSplit[j]);
  }
}
console.log("answer", realNumz.join(""))
