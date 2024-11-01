import random

def spele():
    # Ģenerē nejaušu skaitli no 1 līdz 10
    nejaušais_skaitlis = random.randint(1, 10)
    
    # Nosacījums uzvarai
    if nejaušais_skaitlis == 7:
        rezultats = "Apsveicam! Jūs uzvarējāt ar skaitli 7!"
    else:
        rezultats = f"Diemžēl, skaitlis ir {nejaušais_skaitlis}. Mēģiniet vēlreiz!"
    
    return rezultats

# Funkcijas testēšana
rez = spele()
print(rez)
