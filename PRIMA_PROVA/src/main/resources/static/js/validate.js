// js/validate.js
document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    if (!username.includes("@")) {
        alert("L'email deve contenere '@'");
    } else {
        alert("Form inviato con successo!");
    }
});
