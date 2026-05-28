const pages = [
    "/pages/overworld/000-the-plaza.html"
];

document.getElementById("random-page").addEventListener("click", () => {
    var randomIndex = Math.floor(Math.random() * pages.length);
    var randomPage = pages[randomIndex];
    window.location.href = randomPage;
});