const countdown = (value, fn) => {
    fn(value);
    return value > 0
        ? setTimeout(() => countdown(value - 1, fn), 1000)
        : value;
};
const log = value => console.log(value);
countdown(10, log);