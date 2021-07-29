const lordify = (firstName, land) => {
    if (!firstName) {
        throw new Error("A firstName is required to lordify");
    }
    if (!land) {
        throw new Error("A lord must have a land");
    }
    return `${firstName} of ${land}`;
};

console.log(lordify("Kelly", "Sonoma")); // Kelly of Sonoma
console.log(lordify("Dave")); // ! JAVASCRIPT ERROR