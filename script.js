
const bottoneMenu = document.getElementById("bottone-menu");
const menu = document.getElementById("menu");


bottoneMenu.addEventListener("click", function () {
  const menuAperto = menu.classList.toggle("aperto");

  bottoneMenu.setAttribute("aria-expanded", menuAperto);
});

const bottoneDettagli = document.getElementById("bottone-dettagli");
const dettagli = document.getElementById("dettagli");

if (bottoneDettagli && dettagli) {
  bottoneDettagli.addEventListener("click", function () {
    dettagli.classList.toggle("visibile");

    
    if (dettagli.classList.contains("visibile")) {
      bottoneDettagli.textContent = "Nascondi Link";
    } else {
      bottoneDettagli.textContent = "Link utili";
    }
  });
}
