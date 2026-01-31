let data = "2026-03-31"

let metaiStr = data.slice(0, 4);
let menuoStr = data.slice(5, 7);
let dienaStr = data.slice(8, 10);

let metai = Number(metaiStr);
let menuo = Number(menuoStr);
let diena = Number(dienaStr);

let menuoName = "";
let dataValid = true;

if (menuo == 1) {
    menuoName = "Sausis"
} else if (menuo == 2) {
    menuoName = "Vasaris"
} else if (menuo == 3)
{    menuoName = "Kovas"
} else if (menuo == 4)
{    menuoName = "Balandis"
} else if (menuo == 5)
{    menuoName = "Geguze"
} else if (menuo == 6)
{    menuoName = "Birzelis"
} else if (menuo == 7)
{    menuoName = "Liepa"
} else if (menuo == 8)
{    menuoName = "Rugpjutis"
} else if (menuo == 9)
{    menuoName = "Rugsejis"
} else if (menuo == 10){
    menuoName = "Spalis"
} else if (menuo == 11){
    menuoName = "Lapkritis"
} else if (menuo == 12){
    menuoName = "Gruodis"
} else {
    menuoName = "Nera tokio menesio"
    dataValid = false;
}
// ``
console.log(`Ivesta data: ${dienaStr}-${menuoStr}-${metaiStr}`);
if (dataValid) {
    console.log ("Data yra teisinga");
    console.log(`Menesio skaicius ${menuo} - ${menuoName}`)
} else {
    console.log("Data yra neteisinga")
}