document.addEventListener("DOMContentLoaded", function () {
  // === MENU LATERALE (HAMBURGER) ===
  const openBtn = document.getElementById("open-menu");
  const closeBtn = document.getElementById("close-menu");
  const sideMenu = document.getElementById("side-menu");

  if (openBtn && closeBtn && sideMenu) {
    openBtn.addEventListener("click", function (e) {
      e.stopPropagation(); // evita chiusura immediata
      sideMenu.classList.add("open");
    });

    closeBtn.addEventListener("click", function () {
      sideMenu.classList.remove("open");
    });

    document.addEventListener("click", function (event) {
      if (!sideMenu.contains(event.target) && event.target !== openBtn) {
        sideMenu.classList.remove("open");
      }
    });
  }

  // === BANNER MODALE ISCRIZIONE ===
  const banner = document.getElementById("subscribe-banner");
  const closeBannerBtn = document.getElementById("close-banner");

  if (banner && !sessionStorage.getItem("bannerShown")) {
    setTimeout(() => {
      banner.classList.remove("hidden");
      sessionStorage.setItem("bannerShown", "true");
    }, 5000); 
  }

  if (closeBannerBtn && banner) {
    closeBannerBtn.addEventListener("click", () => {
      banner.classList.add("hidden");
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const symbols = [
    "indice1", "indice2", "indice3", "indice4", "indice5",
    "indice6", "indice7", "indice8", "indice9", "indice10"
  ];

  // DUPLICA IL CONTENUTO DEL TICKER PER EFFETTO LOOP INFINITO
  const tickerWrapper = document.querySelector(".ticker-wrapper");
  if (tickerWrapper) {
    const originalContent = tickerWrapper.innerHTML;
    tickerWrapper.innerHTML += originalContent;
  }

  // GENERA CAMBIAMENTO CASUALE (+/- 0.00% - 3.00%)
  function getRandomChange() {
    const value = (Math.random() * 3).toFixed(2);
    const isPositive = Math.random() > 0.5;
    return {
      value: (isPositive ? "+" : "-") + value + "%",
      className: isPositive ? "ticker-up" : "ticker-down"
    };
  }

  // AGGIORNA I VALORI DI OGNI INDICE
  function updateTicker() {
    symbols.forEach(symbol => {
      const elements = document.querySelectorAll(`.ticker-item[data-symbol="${symbol}"] .ticker-change`);
      const change = getRandomChange();

      elements.forEach(el => {
        el.textContent = change.value;
        el.className = "ticker-change " + change.className;
      });
    });
  }

  // AGGIORNA OGNI 5 SECONDI
  setInterval(updateTicker, 5000);
});
