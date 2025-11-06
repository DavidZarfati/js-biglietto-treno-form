// Aspetta che il DOM sia caricato
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-treno');
    const nomeElem = document.getElementById('nome-cognome');
    const chilometriElem = document.getElementById('chilometri');
    const etàElem = document.getElementById('età');

    form.addEventListener('submit', function (event) {
        event.preventDefault();


        const nome = nomeElem.value;
        const chilometri = parseFloat(chilometriElem.value);
        const eta = parseInt(etàElem.value);

        let prezzo = chilometri * 0.21;
        let tipoOfferta = "Biglietto Standard";


        if (eta < 18) {
            prezzo = prezzo * 0.8; // 20% di sconto per minorenni
            tipoOfferta = "Sconto Minorenni";
        } else if (eta >= 65) {
            prezzo = prezzo * 0.6; // 40% di sconto per over 65
            tipoOfferta = "Sconto Over 65";
        }


        const carrozza = Math.floor(Math.random() * 9) + 1;
        const codiceCp = Math.floor(Math.random() * 90000) + 10000;

        document.getElementById('biglietto-nome').textContent = nome;
        document.getElementById('biglietto-offerta').textContent = tipoOfferta;
        document.getElementById('biglietto-carrozza').textContent = carrozza;
        document.getElementById('biglietto-codice').textContent = codiceCp;
        document.getElementById('biglietto-costo').textContent = prezzo.toFixed(2) + '€';


        document.getElementById('biglietto').classList.remove('hidden');

        // Debug
        // console.log(`Nome passeggero: ${nome}`);
        // console.log(`Chilometri: ${chilometri}`);
        // console.log(`Età: ${eta}`);
        // console.log(`Offerta: ${tipoOfferta}`);
        // console.log(`Prezzo finale: €${prezzo.toFixed(2)}`);
    });


    form.addEventListener('reset', function () {
        document.getElementById('biglietto').classList.add('hidden');
    });
});
