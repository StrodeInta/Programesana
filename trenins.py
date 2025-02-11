import pygame  # Importē pygame bibliotēku
import random  # Importē random bibliotēku, lai ģenerētu nejaušas vērtības

# Inicializē pygame
pygame.init()

# Ekrāna izmēri
WIDTH, HEIGHT = 800, 600  # Nosaka ekrāna platumu un augstumu
screen = pygame.display.set_mode((WIDTH, HEIGHT))  # Izveido pygame logu ar norādītajiem izmēriem
pygame.display.set_caption("Zīmēšana un animācija")  # Iestata loga nosaukumu

# Krāsas definētas kā RGB vērtības
WHITE = (255, 255, 255)  # Balta krāsa
BLACK = (0, 0, 0)  # Melna krāsa
COLORS = [(255, 0, 0), (0, 255, 0), (0, 0, 255), (255, 255, 0), (255, 165, 0)]  # Dažādas krāsas sarakstā

# Mainīgie spēles stāvokļa kontrolei
running = True  # Vai spēle darbojas

drawing = False  # Vai lietotājs zīmē
last_pos = None  # Iepriekšējā kursora pozīcija, lai uzzīmētu līnijas
circles = []  # Saraksts ar apļiem, kas tiks animēti
clock = pygame.time.Clock()  # Pulkstenis, lai kontrolētu kadru ātrumu

# Galvenais spēles cikls
while running:
    screen.fill(WHITE)  # Notīra ekrānu, aizpildot to ar baltu krāsu
    
    for event in pygame.event.get():  # Apstrādā lietotāja ievadi
        if event.type == pygame.QUIT:  # Ja lietotājs aizver logu
            running = False  # Iziet no spēles cilpas
        elif event.type == pygame.MOUSEBUTTONDOWN:  # Ja nospiesta pele
            drawing = True  # Sāk zīmēšanu
            last_pos = event.pos  # Saglabā peles sākuma pozīciju
        elif event.type == pygame.MOUSEBUTTONUP:  # Ja atlaista pele
            drawing = False  # Pārtrauc zīmēšanu
        elif event.type == pygame.MOUSEMOTION and drawing:  # Ja pele tiek kustēta un tiek zīmēts
            pygame.draw.line(screen, BLACK, last_pos, event.pos, 5)  # Uzzīmē līniju starp iepriekšējo un jauno pozīciju
            last_pos = event.pos  # Atjauno pēdējo pozīciju
        elif event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE:  # Ja nospiesta atstarpes taustiņš
            circles.append({  # Pievieno jaunu apli sarakstam
                "x": random.randint(50, WIDTH - 50),  # Nejauša x pozīcija
                "y": random.randint(50, HEIGHT - 50),  # Nejauša y pozīcija
                "radius": random.randint(10, 50),  # Nejaušs rādiuss
                "color": random.choice(COLORS),  # Nejauša krāsa
                "speed": random.randint(1, 5)  # Nejaušs ātrums
            })
    
    # Zīmē animētus apļus
    for circle in circles:
        circle["y"] += circle["speed"]  # Palielina y koordinātu, lai aplis virzītos uz leju
        if circle["y"] > HEIGHT:  # Ja aplis nokļuvis ārpus ekrāna apakšas
       
         circle["y"] = 0  # Restartē no augšas
        pygame.draw.circle(screen, circle["color"], (circle["x"], circle["y"]), circle["radius"])  # Uzzīmē apli
    
    pygame.display.flip()  # Atjauno ekrānu, lai parādītu izmaiņas
    clock.tick(60)  # Ierobežo atjaunināšanas ātrumu līdz 60 kadriem sekundē

pygame.quit()  # Aizver pygame un iziet
  