let num = 123456;
let str = num.toString();

let result = 0;

for (let i = 0; i < str.length; i++) {
    let digit = Number(str[i]);

    if (i % 2 === 0) {
        result += digit;   // add
    } else {
        result -= digit;   // subtract
    }
}

console.log(result);