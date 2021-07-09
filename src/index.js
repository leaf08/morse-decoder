const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let sym = '';
    let arr = [];
    for (let i = 0; i < expr.length; i += 10) {
        sym = expr.slice(i, i + 10);
        if (sym === '**********') arr.push(' ');
        else {
            let str = '';
            for (let j = 0; j < sym.length; j += 2) {
                if (sym.slice(j, j + 2) === '10') str += '.';
                if (sym.slice(j, j + 2) === '11') str += '-';
            }
            arr.push(MORSE_TABLE[str]);
        }
    }
    return arr.join('');
}

module.exports = {
    decode
}
