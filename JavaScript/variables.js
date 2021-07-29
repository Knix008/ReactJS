console.log("var keyword!!!");
var topic = "JavaScript";
if (topic) {
    var topic = "React";
    console.log("block", topic); // block React
}
console.log("global", topic); // global React

console.log("--------------");
console.log("let keyword!!!");
var topic = "JavaScript";
if (topic) {
    let topic = "React";
    console.log("block", topic); // React
}
console.log("global", topic); // JavaScript

console.log(`${topic}`);
