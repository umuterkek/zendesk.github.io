const buton1 = document.getElementById("buton1");
const buton2 = document.getElementById("buton2");
const icerik1 = document.getElementById("icerik1");
const icerik2 = document.getElementById("icerik2");

buton1.addEventListener("click", function() {
    icerik1.style.display = "block";
    icerik2.style.display = "none";
});

buton2.addEventListener("click", function() {
    icerik1.style.display = "none";
    icerik2.style.display = "block";
});