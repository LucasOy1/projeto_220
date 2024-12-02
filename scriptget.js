const calcularButton = document.getElementById('calcular');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');

calcularButton.addEventListener('click', function () {
    const peso = parseFloat(document.getElementById('pesoget').value);
    const altura = parseFloat(document.getElementById('alturaget').value);
    const idade = parseInt(document.getElementById('idadeget').value);
    const sexo = document.getElementById('sexoget').value;
    const atividade = document.getElementById('atividadefisica').value;

    if (isNaN(peso) || isNaN(altura) || isNaN(idade)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const fatoresAtividade = {
        sedentario: 1.2,
        leve: 1.375,
        moderado: 1.55,
        intenso: 1.725,
        muitoIntenso: 1.9
    };

    const alturaCm = altura * 100;
    const geb = sexo === 'M'
        ? (10 * peso + 6.25 * alturaCm - 5 * idade + 5).toFixed(2)
        : (10 * peso + 6.25 * alturaCm - 5 * idade - 161).toFixed(2);

    const get = (geb * fatoresAtividade[atividade]).toFixed(2);

    let description = '';

    if (get < 1500) {
        description = '⚠️ Seu GET está abaixo do ideal. Verifique sua ingestão calórica.';
    } else if (get >= 1500 && get <= 2000) {
        description = '⚖️ Você está dentro de uma faixa saudável de gasto energético.';
    } else if (get > 2000 && get <= 2500) {
        description = '🔍 Seu gasto energético está elevado. Ajuste sua dieta.';
    } else {
        description = '🏋️ Seu GET é muito alto. Certifique-se de manter uma alimentação balanceada.';
    }

    document.getElementById('modal-value').textContent = `${get} kcal`;
    document.getElementById('modal-description').innerHTML = description; // Usando innerHTML aqui

    modal.classList.add('show'); // Mostrar modal
});

closeBtn.addEventListener('click', function () {
    modal.classList.remove('show'); // Fechar modal
});

window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.classList.remove('show');
    }
});
