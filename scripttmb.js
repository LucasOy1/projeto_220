const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const peso = document.getElementById('pesotmb').value;
    const altura = document.getElementById('alturatmb').value;
    const idade = document.getElementById('idadetmb').value;
    const sexo = document.getElementById('sexotmb').value;

    const tmbM = (88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade)).toFixed(2);
    const tmbF = (447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * idade)).toFixed(2);

    const modal = document.getElementById('modal');
    const value = document.getElementById('modal-value');
    const description = document.getElementById('modal-description');
    const closeBtn = document.querySelector('.close-btn');

    modal.classList.add('show');

    let resultText = '';
    let classification = '';

    if (sexo == 'M') {
        value.textContent = tmbM.replace('.', ',');
        if(tmbM > 1600 && tmbM <= 2400){
            resultText = '✅ Sua taxa metabólica basal está ótima!';
        } else if (tmbM > 2400 && tmbM <= 2800){
            resultText = '🔍 Sua TMB está ligeiramente elevada.';
        } else {
            resultText = '⚠️ Sua TMB está abaixo do recomendado.';
        }
    } else { // Lógica feminina
        value.textContent = tmbF.replace('.', ',');
        if(tmbF > 1400 && tmbF <= 2000){
            resultText = '✅ Sua taxa metabólica basal está ótima!';
        } else if (tmbF > 2000 && tmbF <= 2400){
            resultText = '🔍 Sua TMB está ligeiramente elevada.';
        } else {
            resultText = '⚠️ Sua TMB está abaixo do recomendado.';
        }
    }

    description.innerHTML = `${classification} ${resultText}`;

    closeBtn.addEventListener('click', function() {
        modal.classList.remove('show');
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('show');
        }
    });
});
