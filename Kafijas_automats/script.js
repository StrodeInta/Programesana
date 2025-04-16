// Atrodam visus dzērienu pogas
const dzPogas = document.querySelectorAll('.dzerienuPogas');
const kruzite = document.getElementById('kruzite');
const pogaNauda = document.querySelector('#rinda3Kolonna2 button');
const laukums = document.getElementById('laukums');
const ctx = laukums.getContext('2d');

let izveletsDzeriens = null;
let samaksats = false;

// Iestatām canvas izmērus
laukums.width = 200;
laukums.height = 150;

// Noklusēts canvas stāvoklis
function notiritCanvas() {
    ctx.clearRect(0, 0, laukums.width, laukums.height);
}

// Dzēriena izvēle
dzPogas.forEach((poga, index) => {
    poga.addEventListener('click', () => {
        izveletsDzeriens = `Dzēriens ${index + 1}`;
        alert(`Izvēlēts: ${izveletsDzeriens}. Lūdzu samaksājiet.`);
        samaksats = false;
        notiritCanvas();
    });
});

// "Maksājums"
pogaNauda.addEventListener('click', () => {
    if (!izveletsDzeriens) {
        alert('Lūdzu izvēlieties dzērienu vispirms!');
        return;
    }

    samaksats = true;
    alert('Maksājums pieņemts! Lejam dzērienu...');
    lejamKafiju();
});

// Funkcija "lejam" kafiju
function lejamKafiju() {
    // Pārvietojam krūzīti uz lejas daļu
    kruzite.style.transition = 'transform 1s';
    kruzite.style.transform = 'translateY(20px)';

  // Zīmējam horizontālu kafijas straumi
ctx.fillStyle = 'brown';
let x = 0;

let animacija = setInterval(() => {
    if (x >= laukums.width) {
        clearInterval(animacija);
        alert(`${izveletsDzeriens} gatavs!`);
        reset();
    } else {
        ctx.fillRect(0, laukums.height / 2 - 10, x, 20); // horizontāla līnija augstumā 20px
        x += 5;
    }
}, 100);

}

// Atgriež stāvokli sākumā
function reset() {
    setTimeout(() => {
        izveletsDzeriens = null;
        samaksats = false;
        kruzite.style.transform = 'translateY(0)';
        notiritCanvas();
    }, 2000);
}
