// Aspetta che il DOM sia caricato
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-treno');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const chilometri = parseFloat(document.getElementById('chilometri').value);
        const eta = parseInt(document.getElementById('age').value);
        let prezzo = chilometri * 0.21;
        console.log(`Chilometri: ${chilometri}`);
        console.log(`Età: ${eta}`);
        console.log(`Prezzo base: €${prezzo.toFixed(2)}`);

        if (eta < 18) {
            prezzo = prezzo * 0.8; // 20% di sconto per minorenni
        } else if (eta >= 65) {
            prezzo = prezzo * 0.6; // 40% di sconto per over 65
        }

        console.log(`Il tuo prezzo finale è €${prezzo.toFixed(2)}`);
    });
});