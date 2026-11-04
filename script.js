// ===== 1. MENU SUL TELEFONO =====
// Cerchiamo nella pagina il bottone e la lista del menu tramite il loro id
const bottoneMenu = document.getElementById("bottone-menu");
const menu = document.getElementById("menu");

// Quando si clicca il bottone, aggiungiamo o togliamo la classe "aperto"
// (il CSS decide poi come mostrare il menu quando ha questa classe)
bottoneMenu.addEventListener("click", function () {
  menu.classList.toggle("aperto");
});

// ===== 2. BOTTONE "MOSTRA I DETTAGLI" =====
// Esiste solo in progetto.html: nelle altre pagine questi elementi sono assenti,
// quindi controlliamo prima di usarli (altrimenti JavaScript darebbe errore)
const bottoneDettagli = document.getElementById("bottone-dettagli");
const dettagli = document.getElementById("dettagli");

if (bottoneDettagli && dettagli) {
  bottoneDettagli.addEventListener("click", function () {
    dettagli.classList.toggle("visibile");

    // Cambiamo anche la scritta del bottone
    if (dettagli.classList.contains("visibile")) {
      bottoneDettagli.textContent = "Nascondi i dettagli";
    } else {
      bottoneDettagli.textContent = "Mostra i dettagli";
    }
  });
}
