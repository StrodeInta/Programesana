document.addEventListener("DOMContentLoaded", function () {
    // Izvēlamies visus dzērienu pogu elementus
    const drinkButtons = document.querySelectorAll(".dzerienuPogas");
    
    // Izvēlamies krūzītes attēla elementu
    const cupImage = document.getElementById("kruzite");
    
    // Izvēlamies apmaksas pogu
    const payButton = document.querySelector("button:last-child");
    
    // Izvēlamies kanvas elementu un iegūstam tā kontekstu
    const canvas = document.getElementById("laukums");
    const ctx = canvas.getContext("2d");

    // Iestatām kanvas izmērus
    canvas.width = 150;
    canvas.height = 100;

    // Funkcija, kas zīmē kafiju kanvas laukumā
    function drawCoffee() {
        ctx.fillStyle = "#6F4E37"; // Kafijas brūnā krāsa
        ctx.fillRect(50, 50, 50, 30); // Zīmē kafijas taisnstūri kanvā
    }

    // Pievienojam notikumu klausītāju visām dzērienu pogām
    drinkButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Nomaina krūzītes attēlu uz pilnu kafijas attēlu
            cupImage.src = "https://cdn-icons-png.flaticon.com/512/924/924514.png";
            
            // Izsauc funkciju, kas zīmē kafiju kanvas laukumā
            drawCoffee();
        });
    });

    // Pievienojam notikumu klausītāju apmaksas pogai
    payButton.addEventListener("click", function () {
        alert("Apmaksa veikta! Jūsu dzēriens ir gatavs."); // Parāda paziņojumu par veiksmīgu apmaksu
    });
});