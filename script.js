document.addEventListener('DOMContentLoaded', () => {
    const questionsDiv = document.getElementById('questions');
    const submitBtn = document.getElementById('submitBtn');
    const resultsDiv = document.getElementById('results');
    const resultsContent = document.getElementById('resultsContent');

    // Domande da 4 a 18
    const questions = [
        "Hai subito infortuni NELL’ULTIMO ANNO?",
        "Hai subito infortuni NEGLI ULTIMI 5 ANNI?",
        "Hai subito OPERAZIONI CHIRURGICHE negli ultimi 5 anni?",
        "Senti costantemente DOLORE o RIGIDITÀ in una parte del tuo corpo?",
        "A volte prendi FARMACI ANTIDOLORIFICI?",
        "Durante i tuoi allenamenti, fai esercizi per i QUADRICIPITI in appoggio SU UNA GAMBA SOLA?",
        "Durante i tuoi allenamenti, fai esercizi per i FEMORALI in appoggio SU UNA GAMBA SOLA?",
        "Durante i tuoi allenamenti, fai esercizi per i POLPACCI in appoggio SU UNA GAMBA SOLA?",
        "Durante i tuoi allenamenti, fai esercizi per ADDOME, GLUTEI e SCHIENA in isometria?",
        "Tenendo le ginocchia stese, riesci a TOCCARTI LA PUNTA DEI PIEDI con le mani?",
        "Durante i tuoi allenamenti, fai esercitazioni dedicate alla tecnica di SALTO ed ATTERRAGGIO su una gamba?",
        "Durante i tuoi allenamenti, fai esercitazioni dedicate al miglioramento di SCATTI, ACCELERAZIONI e DECELERAZIONI?",
        "Durante i tuoi allenamenti, fai esercitazioni dedicate allo sviluppo dell’EQUILIBRIO in appoggio su una gamba sola?",
        "Durante la settimana, fai almeno 5 ALLENAMENTI?",
        "Sei seguito da un FISIOTERAPISTA SPECIALIZZATO NEL CALCIO?"
    ];

    // Generazione dinamica delle domande
    questions.forEach((question, index) => {
        const div = document.createElement('div');
        div.innerHTML = `
            <label>${index + 4}. ${question}</label>
            <label><input type="radio" name="question${index + 4}" value="Sì"> Sì</label>
            <label><input type="radio" name="question${index + 4}" value="No"> No</label>
        `;
        questionsDiv.appendChild(div);
    });

    // Calcolo del risultato
    submitBtn.addEventListener('click', () => {
        const responses = questions.map((_, index) => {
            return document.querySelector(`input[name="question${index + 4}"]:checked`)?.value || "Non risposto";
        });

        const riskLevel = responses.filter(r => r === "Sì").length > 5 ? "Alto" : "Basso";
        const advice = riskLevel === "Alto"
            ? "Consulta un fisioterapista per un controllo approfondito."
            : "Continua così! Ottimo lavoro.";

        resultsContent.innerHTML = `
            <strong>Livello di rischio:</strong> ${riskLevel}<br>
            <strong>Consigli:</strong> ${advice}
        `;
        resultsDiv.style.display = 'block';
    });
});
