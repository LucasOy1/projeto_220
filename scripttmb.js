const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const altura = parseFloat(document.getElementById('alturatmb').value);
    const peso = parseFloat(document.getElementById('pesotmb').value);
    const sexo = document.getElementById('sexotmb').value;
    const idade = parseFloat(document.getElementById('idadetmb').value);

    const alturacm = altura * 100;
    let tmb = 0;
    
    if (sexo === 'H') {
        tmb = 88.362 + (13.397 * peso) + (4.799 * alturacm) - (5.677 * idade);
    } else {
        tmb = 447.593 + (9.247 * peso) + (3.098 * alturacm) - (4.330 * idade);
    }

    document.getElementById("value").textContent = tmb.toFixed(2);

    document.getElementById("infos").classList.remove("hidden");
});