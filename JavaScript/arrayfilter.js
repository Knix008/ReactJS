const schools = ["Yorktown", "Washington & Liberty", "Wakefield"];

const cutSchool = (cut, list) => list.filter(school => school !== cut);
console.log(cutSchool("Washington & Liberty", schools).join(", "));
// "Yorktown, Wakefield"
console.log(schools.join("\n"));