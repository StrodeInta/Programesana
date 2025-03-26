function hipotenuza(a, b) {
    return Math.sqrt(a * a + b * b);
}

function aprēķinātHipotenūzu() {
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    if (!isNaN(a) && !isNaN(b) && a > 0 && b > 0) {
        document.getElementById('rezultats').innerText = hipotenuza(a, b).toFixed(2);
    } else {
        document.getElementById('rezultats').innerText = 'Lūdzu ievadiet derīgus skaitļus!';
    }
}