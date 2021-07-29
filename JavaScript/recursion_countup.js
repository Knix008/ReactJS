const countup = (value, fn) => {
    fn(value);
    return value < 10 ? countup(value + 1, fn) : value;
};
countup(0, value => console.log(value));