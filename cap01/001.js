// escopo variaives

var myVariable = "global"
myOtherVariable = "global"
function myFunction() {
  var myOtherVariable = "local"
  return myOtherVariable
}
function myOtherFunction() {
  myOtherVariable = "local"
  return myOtherVariable
}
console.log(myVariable)
console.log(myFunction())
console.log(myOtherVariable)
console.log(myOtherFunction)
console.log(myOtherVariable)
