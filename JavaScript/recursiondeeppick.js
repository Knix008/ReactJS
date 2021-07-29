const dan = {
    type: "person",
    data: {
        gender: "male",
        info: {
            id: 22,
            fullname: {
                first: "Dan",
                last: "Deacon"
            }
        }
    }
};
const deepPick = (fields, object = {}) => {
    const [first, ...remaining] = fields.split(".");
    console.log(first);
    console.log(remaining);
    console.log(object[first]);
    console.log("------------");
    return remaining.length
        ? deepPick(remaining.join("."), object[first])
        : object[first];
};

deepPick("type", dan); // "person"
deepPick("data.info.fullname.first", dan); // "Dan"