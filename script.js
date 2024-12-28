document.addEventListener("DOMContentLoaded", function () {
    const htmlTab = document.getElementById("html-tab");
    const cssTab = document.getElementById("css-tab");
    const jsTab = document.getElementById("js-tab");

    const htmlContent = document.getElementById("html-content");
    const cssContent = document.getElementById("css-content");
    const jsContent = document.getElementById("js-content");

    htmlTab.addEventListener("click", function () {
        htmlContent.style.display = "block";
        cssContent.style.display = "none";
        jsContent.style.display = "none";
    });

    cssTab.addEventListener("click", function () {
        htmlContent.style.display = "none";
        cssContent.style.display = "block";
        jsContent.style.display = "none";
    });

    jsTab.addEventListener("click", function () {
        htmlContent.style.display = "none";
        cssContent.style.display = "none";
        jsContent.style.display = "block";
    });
});