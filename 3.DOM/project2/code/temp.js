function say(something) {
    console.log(something);
}

say('Hello');

function exec(func, arg) {
    func(arg);
}
exec(say, "hello!!")

exec((something) => {
    console.log(something);
}, 'Greetings, everyone!');


window.setTimeout((something) => {
    console.log(something);
}, 5000, 'Greetings, everyone!');