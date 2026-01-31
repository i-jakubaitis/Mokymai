let pirmasSkaiciusTekstas = prompt("Iveskite pirma skaiciu")
let antrasSkaiciusTekstas = prompt("Iveskite antra skaiciu")
let treciasSkaiciusTekstas = prompt("Iveskite trecia skaiciu")

let sk1 = Number(pirmasSkaiciusTekstas);
let sk2 = Number(antrasSkaiciusTekstas);
let sk3 = Number(treciasSkaiciusTekstas);

if (isNaN(sk1) || isNaN(sk2) || isNaN(sk3)) {
    console.log("Skaiciavimas negalimas. Klaida ivestyje")
} else {
    let sum = sk1 + sk2 + sk3;
    let avg = sum / 3;
    console.log(`Ivesti skaiciai ${sk1}, ${sk2}, ${sk3}`)
    console.log(`Skaiciu suma ${sum}`)
    console.log(`Skaiciu vidurkis ${avg}`)
}