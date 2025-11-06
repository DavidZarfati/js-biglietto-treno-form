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

        // piccolo easter egg Harry potteriano
        if (nome.toLowerCase() === 'alan rickman') {
            document.body.style.backgroundImage = 'url(./img/Hogwarts_Express.jpg)'
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundRepeat = 'no-repeat';
            document.body.style.height = '100%';
            document.documentElement.style.height = '100%';

            const titolo = document.querySelector('h1');
            titolo.textContent = 'Bravo Severus🐍, benvenuto al binario 9 e 3/4, da che parte stai questa volta?';
            titolo.style.color = 'white';


            const container = document.querySelector('.container');
            container.style.backgroundColor = 'transparent';


            form.style.display = 'none';
            document.getElementById('biglietto').classList.add('hidden');
            return;
        }
        if (nome.toLowerCase() === 'harry potter') {
            document.body.style.backgroundImage = 'url(./img/Hogwarts_Express.jpg)'
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundRepeat = 'no-repeat';
            document.body.style.height = '100%';
            document.documentElement.style.height = '100%';

            const titolo = document.querySelector('h1');
            titolo.textContent = 'Bravo Harry 🤓, benvenuto al binario 9 e 3/4,occhio ai mangiamorte';
            titolo.style.color = 'white';


            const container = document.querySelector('.container');
            container.style.backgroundColor = 'transparent';


            form.style.display = 'none';
            document.getElementById('biglietto').classList.add('hidden');
            return;
        }
        if (nome.toLowerCase() === 'hermione granger') {
            document.body.style.backgroundImage = 'url(./img/Hogwarts_Express.jpg)'
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundRepeat = 'no-repeat';
            document.body.style.height = '100%';
            document.documentElement.style.height = '100%';

            const titolo = document.querySelector('h1');
            titolo.textContent = 'Brava Hermione, benvenuta al binario 9 e 3/4, ed è leviòsa,non leviosà🧏‍♀️';
            titolo.style.color = 'white';


            const container = document.querySelector('.container');
            container.style.backgroundColor = 'transparent';


            form.style.display = 'none';
            document.getElementById('biglietto').classList.add('hidden');
            return;
        }
        if (nome.toLowerCase() === 'ronald weasley') {
            document.body.style.backgroundImage = 'url(./img/Hogwarts_Express.jpg)'
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundRepeat = 'no-repeat';
            document.body.style.height = '100%';
            document.documentElement.style.height = '100%';

            const titolo = document.querySelector('h1');
            titolo.textContent = 'Bravo Ron, benvenuto al binario 9 e 3/4,attento a Crosta😼';
            titolo.style.color = 'white';


            const container = document.querySelector('.container');
            container.style.backgroundColor = 'transparent';


            form.style.display = 'none';
            document.getElementById('biglietto').classList.add('hidden');
            return;
        }
        if (nome.toLowerCase() === 'tu sai chi') {
            document.body.style.backgroundImage = 'url(./img/Hogwarts_Express.jpg)'
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundRepeat = 'no-repeat';
            document.body.style.height = '100%';
            document.documentElement.style.height = '100%';

            const titolo = document.querySelector('h1');
            titolo.textContent = 'M-Ma... quel TU SAI CHI? quello che non deve essere nominato?!☠';
            titolo.style.color = 'white';


            const container = document.querySelector('.container');
            container.style.backgroundColor = 'transparent';


            form.style.display = 'none';
            document.getElementById('biglietto').classList.add('hidden');
            return;
        }

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

        document.body.style.backgroundImage = '';

        form.style.display = 'flex';


        const titolo = document.querySelector('h1');
        titolo.textContent = 'Calcola il prezzo del biglietto del treno';
        titolo.style.color = '';


        const container = document.querySelector('.container');
        container.style.backgroundColor = '';
    });
});
