//1
const foo = () => {
    const text = document.getElementById('text');
    let textContent = parseInt(text.textContent);
    if (isNaN(textContent)) {
        textContent = 0;
    }
    textContent++;
    text.textContent = textContent;
}

//2
const foo2 = () => {
    //i would create another function to get a random color but u wanted this withing foo so
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    const backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";

    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    const color = "rgb(" + red + ", " + green + ", " + blue + ")";

    let spans = document.querySelectorAll('span');

    spans.forEach(span => {
        span.style.color = color;
        span.style.backgroundColor = backgroundColor;
    });
}


//3
let arr = [1, 2, 3, 4, 5]
const squareArr = (array) => array.map(value => value * value);
arr = squareArr(arr);
// console.log(arr);


//4
let stringArr = ['a', 'b', 'hga'];
const stringsIncludeA = (array) => array.filter(value => value.includes('a'));
stringArr = stringsIncludeA(stringArr);
// console.log(stringArr);


//5
// setInterval(() => { console.log('hello'); }, 1000)


//6: 6, 6 will be printed

/*
7:
var has a global scope meaning you can access it before its declared unlike 
const and let who are only accessiable within the function or statement the were declared in
var can be redeclared, let can only be changed, const is a constant - it cannot be modified
*/

//8: -1

//9: 0

//10: false
console.log(1 === 2 && "howdy")


//11: howdy

//12
const foo12 = (option) => {
    const color = option.value;
    document.getElementById("bruh").style.color = color;
};

//13: i see no issue so yes

//14: the browser's version is determines performance, js features support, security and the likes of those.
//you can make your code compatible to ensure it would work in different versions or browsers.
//use auto test tools to identify compatibility, regular tests and modification of your code are the way to go here, i think

//15:
function google() {
    window.location.replace = 'https://www.google.com';
}



//16: false, after the .join b would be: h,e,l,l,o and with the split [ 'h,e,l,l,o' ]
//since you didnt specify where to split it, it would just be an array with the given single string
//therefore the answer would be false

//17: d