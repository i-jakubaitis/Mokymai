let skStr = prompt("Iveskite skaiciu");

let sk = Number(skStr);

console.log(`Gauta ivestis ${skStr}`);

if (isNaN(sk)) {     
    console.log("Ar tai yra skaicius? Ne");
} else {
    console.log("Ar tai yra skaicius? Taip")
    let isEven = sk % 2 === 0;
let answerIsEven = "";

if (isEven) {
    answerIsEven = "Taip"
} else {
    answerIsEven = "Ne"
}

console.log(`As skaicius yra lyginis skaicius? ${answerIsEven}`)

 let saknis = Math.sqrt(sk)
 let isInteger = Number.isInteger(saknis)
 let anwserIsInteger = ""

 if (isInteger) {
    anwserIsInteger = "Taip"
 } else {
    anwserIsInteger = "Ne"
 }
 console.log(`Ar kvadratine saknis is sio skaicius yra sveikas skaicius? ${anwserIsInteger}`)
}




// console.log(`Ar tai yra skaicius ${}`)
// console.log(`As skaicius yra lyginis skaicius? ${}`)
// console.log(`Ar kvadratine saknis is sio skaicius yra sveikas skaicius? ${}`)