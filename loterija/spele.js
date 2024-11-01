function spele() {
    // Ģenerē nejaušu skaitli no 1 līdz 10
    let nejaušaisSkaitlis = Math.floor(Math.random() * 10) + 1;

    // Nosacījums uzvarai
    if (nejaušaisSkaitlis === 7) {
        document.getElementById("rezultats").innerText = "Apsveicam! Jūs uzvarējāt ar skaitli 7!";
    } else {
        document.getElementById("rezultats").innerText = "Diemžēl, skaitlis ir " + nejaušaisSkaitlis + ". Mēģiniet vēlreiz!";
    }
}
