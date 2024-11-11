  
        // Funkcija, kas iegūst pašreizējo datumu un laiku un formatē to
        function showDateTime() {
            // Izveido jaunu datuma objektu
            const now = new Date();

            // Formatē datumu uz vietējo formātu (piemēram, "DD/MM/GGGG")
            const formattedDate = now.toLocaleDateString();

            // Formatē laiku uz vietējo formātu (piemēram, "HH:MM:SS")
            const formattedTime = now.toLocaleTimeString();

            // Atjauno HTML elementu ar ID "datetime", lai rādītu datumu un laiku
            document.getElementById('datetime').innerText = `Datums: ${formattedDate}, Laiks: ${formattedTime}`;
        }
