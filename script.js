
const bottoneMenu = document.getElementById("bottone-menu");
const menu = document.getElementById("menu");


bottoneMenu.addEventListener("click", function () {
  menu.classList.toggle("aperto");
});


const bottoneDettagli = document.getElementById("bottone-dettagli");
const dettagli = document.getElementById("dettagli");

if (bottoneDettagli && dettagli) {
  bottoneDettagli.addEventListener("click", function () {
    dettagli.classList.toggle("visibile");

    
    if (dettagli.classList.contains("visibile")) {
      bottoneDettagli.textContent = "Nascondi i dettagli";
    } else {
      bottoneDettagli.textContent = "Mostra i dettagli";
    }
  });
}
