// Kad lapa ir pilnībā ielādēta
window.onload = function() {
    alert("Sveiciens no JavaScript faila!");

    // Izvēlamies <h1> elementu (tas, kur rakstīts "Čau")
    const h1 = document.querySelector("h1");

    // Uzklikšķinot uz <h1>, mainās teksts
    h1.addEventListener("click", function() {
        h1.textContent = "Tu uzklikšķināji uz manis!";
        h1.style.color = "blue";
    });
};
