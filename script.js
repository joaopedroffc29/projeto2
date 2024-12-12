function converter() {
    const temperatura = parseFloat(document.getElementById('temperatura').value);
    const escala = document.getElementById('escala').value;

    if (isNaN(temperatura)) {
        alert('Por favor, digite um número válido.');
        return;
    }

    let resultado;
    if (escala === 'celsius') {
        resultado = (temperatura * 9/5) + 32;
    } else {
        resultado = (temperatura - 32) * 5/9;
    }

    document.getElementById('resultado').textContent = `Resultado: ${resultado} ${escala === 'celsius' ? 'Fahrenheit' : 'Celsius'}`;
}