const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const altura = parseFloat(document.getElementById('alturaimc').value);
    const peso = parseFloat(document.getElementById('pesoimc').value);
    const sexo = document.getElementById('sexoimc').value;

    const imc = peso / (altura * altura);
    let classificacao;
    value.classList.add('atencao');

    if (sexo == "M") {
        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            classificacao = 'Peso normal';
            value.classList.remove('atencao');
            value.classList.add('normal');
        } else if (imc >= 25 && imc < 29.9) {
            classificacao = 'Sobrepeso';
        } else if (imc >= 30 && imc < 34.9) {
            classificacao = 'Obesidade I';
        } else if (imc >= 35 && imc < 39.9) {
            classificacao = 'Obesidade II';
        } else {
            classificacao = 'Obesidade III';
        }
    } else {
        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
        } else if (imc >= 19.5 && imc < 25.9) {
            classificacao = 'Peso normal';
            value.classList.remove('atencao');
            value.classList.add('normal');
        } else if (imc >= 26 && imc < 30.9) {
            classificacao = 'Sobrepeso';
        } else if (imc >= 31 && imc < 34.9) {
            classificacao = 'Obesidade I';
        } else if (imc >= 35 && imc < 39.9) {
            classificacao = 'Obesidade II';
        } else {
            classificacao = 'Obesidade III';
        }
    }

    document.getElementById("value").textContent = imc.toFixed(2);
    document.getElementById("description").querySelector('span').textContent = classificacao;

    document.getElementById("infos").classList.remove("hidden");
});
