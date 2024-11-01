document.getElementById("addRow").addEventListener("click", function() {
    aggiungiRiga("Tony Boy", "Routine", "https://open.spotify.com/embed/track/7uy7SWp4sduMey3M6GGOpD");
    aggiungiRiga("Gue", "2%", "https://open.spotify.com/embed/track/5ODlTG5qxhCsC05E36Rv25");
    aggiungiRiga("Lazza", "Morto mai", "https://open.spotify.com/embed/track/4vuQhmBVvyy4Zau0Ypv738");
    aggiungiRiga("Glocky", "Problem Solver", "https://open.spotify.com/embed/track/3X5Zw8zkIGULZEnJUwwJwj");
    aggiungiRiga("Tedua", "Kill Bill", "https://open.spotify.com/embed/track/4OqRBVQcEXwKCj5d7ztx6Z");
});

function aggiungiRiga(artista, canzone, embedLink) {
    const table = document.getElementById("restaurantsTable").getElementsByTagName("tbody")[0];

    // Controlla se la canzone esiste già
    const righeEsistenti = Array.from(table.getElementsByTagName("tr"));
    const esiste = righeEsistenti.some(row => row.cells[1] && row.cells[1].textContent === canzone);

    if (!esiste) {
        // Crea e inserisci una nuova riga
        const newRow = table.insertRow();
        newRow.innerHTML = `
            <td>${artista}</td>
            <td>${canzone}</td>
            <td><button class="btn btn-danger deleteRow">Rimuovi</button></td>
            <td>
                <iframe class="spotify-embed" src="${embedLink}" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </td>`;
        addDeleteEvent(newRow);
    } else {
        alert(`La canzone "${canzone}" è già presente nella lista.`);
    }
}

function addDeleteEvent(row) {
    const deleteButton = row.querySelector(".deleteRow");
    deleteButton.addEventListener("click", function() {
        row.remove();
    });
}
