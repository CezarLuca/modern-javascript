// returning values

// const speak = function(name = 'luigi', time = 'night'){
    // console.log(`good ${time} ${name}`);
// };

function leibinzPi(precision){
    let pi = 0;
    let sign = 1;
    for(let i=0; i<precision; i++){
        pi += (sign/(2*i+1));
        sign *= -1;
    }
    return pi*4;
}
console.log(leibinzPi(100000));

const calcArea = function(radius){
    return leibinzPi(100000) * radius**2;
};

const area = calcArea(5);
console.log(area);

// const calcVol = function(radius, height){
//     return calcArea(radius) * height;
// };

// cost vol = calcVol(5, 10);
// console.log(vol);

// !!!Arrow functions!!!

const calcArrowarea = radius => leibinzPi(100000) * radius**2;
// arrow function dont need code block if only one line of code
// arrow functions dont need return if only one line of code (implicit return)
// if no parameter, use parenthesis
// if more than one parameter, use parenthesis
// arrow functions are always anonymous

const arrowarea = calcArrowarea(5);
console.log(arrowarea);

// practice arrow functions

const greet = () => "Hello, world!";
const result = greet();
console.log(result);

const bill = (products, tax) => {
    let total = 0;
    for(let i=0; i<products.length; i++){
        total += products[i] + products[i]*tax;
    }
    return total;
};
const total = bill([10, 15, 30], 0.2);
console.log(total);