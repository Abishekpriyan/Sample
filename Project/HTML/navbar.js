// Load navbar.html into the #navbar div
document.addEventListener("DOMContentLoaded", function() {
    fetch("home.html")
        .then(response => response.text())
        .then(data => document.getElementById("navbar").innerHTML = data);
});
