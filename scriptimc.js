const form = document.getElementById('form');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const altura = parseFloat(document.getElementById('alturaimc').value);
    const peso = parseFloat(document.getElementById('pesoimc').value);
    const sexo = document.getElementById('sexoimc').value;

    const imc = peso / (altura * altura);
    let classificacao;

    if (sexo == "M") {
        classificacao = imc < 18.5 ? 'Abaixo do peso' :
                        imc < 24.9 ? 'Peso normal' :
                        imc < 29.9 ? 'Sobrepeso' :
                        imc < 34.9 ? 'Obesidade I' :
                        imc < 39.9 ? 'Obesidade II' : 'Obesidade III';
    } else {
        classificacao = imc < 18.5 ? 'Abaixo do peso' :
                        imc < 25.9 ? 'Peso normal' :
                        imc < 30.9 ? 'Sobrepeso' :
                        imc < 34.9 ? 'Obesidade I' :
                        imc < 39.9 ? 'Obesidade II' : 'Obesidade III';
    }

    document.getElementById("modal-value").textContent = imc.toFixed(2);
    document.getElementById("modal-description").innerHTML = `<strong>Classificação:</strong> ${classificacao}`;
    modal.classList.add('show');
});

closeBtn.addEventListener('click', function () {
    modal.classList.remove('show');
});

window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.classList.remove('show');
    }
});
