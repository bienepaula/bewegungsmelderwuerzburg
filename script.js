document.addEventListener('DOMContentLoaded', () => {
    // Scroll-to-Section Funktion
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamische Veranstaltungsliste
    
    document.addEventListener('DOMContentLoaded', function() {
    const eventsList = document.getElementById('eventsList');

    // Hier würdest du eine AJAX-Anfrage an den Server senden, um die gespeicherten Veranstaltungen abzurufen
    // Temporär die Veranstaltung in der Liste anzeigen
    const eventItem = document.createElement('div');
    eventItem.textContent = 'Beispielveranstaltung - 2024-08-29';
    eventsList.appendChild(eventItem);
});

    document.getElementById('event-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const eventName = document.getElementById('event-name').value;
        const eventDate = document.getElementById('event-date').value;
        const eventLocation = document.getElementById('event-location').value;

        const eventList = document.getElementById('event-list');
        const newEvent = document.createElement('li');
        newEvent.textContent = `${eventDate}: ${eventName} - ${eventLocation}`;
        eventList.appendChild(newEvent);

        e.target.reset();
    });

   
});
