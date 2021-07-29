const obj = {
    message: "They can be added to objects like variables",
    log(message) {
        console.log(message);
    }
};
obj.log(obj.message);

const messages = [
    "They can be inserted into arrays",
    message => console.log(message),
    "like variables",
    message => console.log(message)
];

messages[1](messages[0]); // They can be inserted into arrays
messages[3](messages[2]); // like variables

const createScream = function(logger) {
    return function(message) {
        logger(message.toUpperCase() + "!!!");
    };
};
const scream = createScream(message => console.log(message));
scream("functions can be returned from other functions");
scream("createScream returns a function");
scream("scream invokes that returned function");