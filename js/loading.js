let time

function loadingScreen() {
    time = setTimeout(showPage, 2700)
}

function showPage() {
    document
        .getElementById("load")
        .style
        .display = "none";
    document
        .getElementById("Homepage")
        .style
        .display = "block";
}