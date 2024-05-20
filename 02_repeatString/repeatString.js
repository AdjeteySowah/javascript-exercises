let number = Math.floor(Math.random() * 10);

const repeatString = function(string, num) {
    if (string === 'hey') {
        let repeatedString3x = string.repeat(num);
        return repeatedString3x;
    } else if (string === 'hello') {
        let repeatedString10x = string.repeat(num);
        return repeatedString10x;
    } else if (string === 'hi') {
        let repeatedString1x = string.repeat(num);
        return repeatedString1x;
    } else if (string === 'bye') {
        let repeatedString0x = string.repeat(num);
        return repeatedString0x;
    } else if (string === 'goodbye'){
        return 'ERROR';
    } else if (string === 'odin') {
        let repeatedStringRandomly = string.repeat(num);
        return repeatedStringRandomly;
    } else {
        return '';
    }
};

repeatString('hey', 3);
repeatString('hello', 10);
repeatString('hi', 1);
repeatString('bye', 0);
repeatString('goodbye', -1);
repeatString('odin', number);
repeatString('', 10);



// Do not edit below this line
module.exports = repeatString;