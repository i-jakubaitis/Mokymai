let skStr = prompt("Iveskite skaiciu")
let sk = Number(skStr)

if (isNaN(sk)) {
    console.log("Ivestis neteisinga")
} else {
    function savaitesDiena(sk) {
        const dienos = [
            "Pirmadienis", "Antradienis", "Treciadienis", "Ketvirtadienis", "Penktadienis", "Sestadienis", "Sekmadienis"
        ];
        const indeksas = ((sk - 1) % 7 + 7) % 7;

        return dienos[indeksas]
    }

    console.log(savaitesDiena(sk))
}