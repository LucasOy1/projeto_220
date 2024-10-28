const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const peso = document.getElementById('pesotmb').value;
    const altura = document.getElementById('alturatmb').value;
    const idade = document.getElementById('idadetmb').value;
    const sexo = document.getElementById('sexotmb').value;

    const tmbM = (88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade)).toFixed(2);
    const tmbF = (447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * idade)).toFixed(2);

    const value = document.getElementById('value')
    let description = '';

    value.classList.add('atencao');
    value.classList.add('moderado');

    document.getElementById('infos').classList.remove('hidden');

    if (sexo == 'M') {
        value.textContent = tmbM.replace('.', ',');
        if(tmbM > 1600 && tmbM <= 2400){
            description = 'Parabéns! Sua TMB está em uma faixa saudável.'
            value.classList.remove('atencao');
            value.classList.remove('moderado');
        } else if (tmbM > 2400 && tmbM <= 2800){
            description = 'Sua TMB está acima do esperado.'
            value.classList.remove('normal');
            value.classList.remove('atencao');
            value.classList.add('moderado');
        } else {
            description = 'Sua TMB está fora do recomendado.'
            value.classList.add('atencao');
    
        }
    } else { //Lógica feminina
        value.textContent = tmbF.replace('.', ',');
        if(tmbF > 1400 && tmbF <= 2000){
            description = 'Parabéns! Sua TMB está em uma faixa saudável.'
            value.classList.remove('atencao');
            value.classList.remove('moderado');
        } else if (tmbF > 2000 && tmbF <= 2400){
            description = 'Sua TMB está acima do esperado.'
            value.classList.remove('normal');
            value.classList.add('moderado');
        } else {
            description = 'Sua TMB está fora do recomendado.'
            value.classList.add('atencao');
        }
    }

    document.getElementById('description').textContent = description;
})