const names = [
  {
    name: "ana",
    age: 12
  },
  {
    name: "Ana",
    age: 1
  },
  {
    name: "jose",
    age: 30
  },
  {
    name: "Jose",
    age: 30
  },
  {
    name: "mariana",
    age: 20
  }
];
const compare = names.sort((a, b) => a.name - b.name);
//console.log(compare);
const firtsnames = ["Ana", "ana", "joao", "Joao"];

console.log("====================================");
console.log(firtsnames.sort((a, b) => a.localeCompare(b)));
console.log("====================================");
