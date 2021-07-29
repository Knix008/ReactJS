const compose = (...fns) => arg =>
    fns.reduce((composed, f) => f(composed), arg);

const oneSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = message => console.log(message);

const serializeClockTime = date => ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
});

const civilianHours = clockTime => ({
    ...clockTime,
    hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours
});

const appendAMPM = clockTime => ({
    ...clockTime,
    ampm: clockTime.hours >= 12 ? "PM" : "AM"
});

const display = target => time => target(time);

const formatClock = format => time =>
    format
        .replace("hh", time.hours)
        .replace("mm", time.minutes)
        .replace("ss", time.seconds)
        .replace("tt", time.ampm);

const prependZero = clockTime => ({
    ...clockTime,
    hours: clockTime.hours < 10 ? "0" + clockTime.hours : clockTime.hours,
    minutes: clockTime.minutes < 10 ? "0" + clockTime.minutes : clockTime.minutes,
    seconds: clockTime.seconds < 10 ? "0" + clockTime.seconds : clockTime.seconds
    // Need to change to use "key".
});

const convertToCivilianTime = clockTime =>
    compose(
        appendAMPM,
        civilianHours
    )(clockTime);

const doubleDigits = civilianTime =>
    compose(
        prependZero
    )(civilianTime);

const startTicking = () =>
    setInterval(
        compose(
            clear,
            getCurrentTime,
            serializeClockTime,
            convertToCivilianTime,
            doubleDigits,
            formatClock("hh:mm:ss tt"),
            display(log)
        ),
        oneSecond()
    );

startTicking();