function calculateResult() {
    const category = document.getElementById('category').value;
    const role = document.getElementById('role').value;
    const age = document.getElementById('age').value;

    let analysis = `<strong>Categoria:</strong> ${category}<br>`;
    analysis += `<strong>Ruolo:</strong> ${role}<br>`;
    analysis += `<strong>Età:</strong> ${age}<br><br>`;

    // Simula un calcolo del rischio per semplicità
    if (age === "Più di 41") {
        analysis += "⚠️ <strong>Rischio Infortunio Alto:</strong> La tua età aumenta il rischio, attenzione alla preparazione.<br>";
    } else {
        analysis += "✅ <strong>Rischio Infortunio Moderato:</strong> Mantieni una buona routine di allenamento.<br>";
    }

    document.getElementById('analysis').innerHTML = analysis;
    document.getElementById('result').classList.remove('hidden');
}
