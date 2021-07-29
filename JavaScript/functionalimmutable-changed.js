let list = [{ title: "Rad Red" }, { title: "Lawn" }, { title: "Party Pink" }];

const addColor = (title, array) => array.concat({ title });
console.log(addColor("Glam Green", list).length); // 4
console.log(list.length); // 3

const newaddColor = (title, list) => [...list, { title }];
console.log(newaddColor("Glam Green", list).length); // 4
console.log(list.length); // 3