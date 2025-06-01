import JatekSor from "./JatekSor.js";
import Generalt from "./Generalt.js";
import { szinekLista, generaltLista, visszajelzesLista, tippLista } from "./listak.js";

export default class Jatek {
  #szinekLista = [];
  #generaltLista = [];
  #visszajelzesListaM = [];
  #tippListaM = [];
  #jatekter;
  #aktualisSorIndex = 0;
  #aktualisElemIndex = 0;
  constructor() {
   
    this.#szinekLista = szinekLista;
    this.#generaltLista = generaltLista;
    this.#visszajelzesListaM = visszajelzesLista;
    this.#tippListaM = tippLista;
    
    this.#jatekter = document.querySelector(".jatekter");
    this.generaltListaEloallit();
    this.megjelenit();
    this.szinValasztoEsemenyek();
    this.ellenorizTippet();
  }

  megjelenit() {
    const generaltElem = document.querySelector(".generalt .jateksor");
    new Generalt(this.#generaltLista, generaltElem);
    for (let index = 0; index < 10; index++) {
      new JatekSor(this.#visszajelzesListaM[index], this.#tippListaM[index], this.#jatekter);
    }
  }
  
  generaltListaEloallit() {
  
    const szinLista = [...this.#szinekLista];
    szinLista.sort(() => Math.random() - 0.5);
    this.#generaltLista = szinLista.slice(0, 4);
  }
  
  
   
  szinValasztoEsemenyek() {
     const szinElemek = document.querySelectorAll(".szin");
    szinElemek.forEach(elem => {
    elem.addEventListener("click", () => {
      const kivalasztottSzin = elem.getAttribute("data-szin");

      const jateksorok = document.querySelectorAll(".jatekter .jateksor");
      const aktualisSor = jateksorok[this.#aktualisSorIndex];
      if (!aktualisSor) return;

      const korok = aktualisSor.querySelectorAll(".sor .elem");
      if (this.#aktualisElemIndex >= korok.length) return;

      korok[this.#aktualisElemIndex].style.backgroundColor = kivalasztottSzin;

      this.#tippListaM[this.#aktualisSorIndex][this.#aktualisElemIndex] = kivalasztottSzin;

      this.#aktualisElemIndex++;

      if (this.#aktualisElemIndex === 4) {
  this.ellenorizTippet();
  this.#aktualisSorIndex++;
  this.#aktualisElemIndex = 0;
}
      });
    });
  }
  ellenorizTippet() {
  const tipp = this.#tippListaM[this.#aktualisSorIndex];
  const megoldas = this.#generaltLista;

  let fekete = 0;
  let feher = 0;

  const megoldasMasolat = [...megoldas];
  const tippMasolat = [...tipp];
  for (let i = 0; i < 4; i++) {
    if (tippMasolat[i] === megoldasMasolat[i]) {
      fekete++;
      megoldasMasolat[i] = null;
      tippMasolat[i] = null;
    }
  }

  for (let i = 0; i < 4; i++) {
    if (tippMasolat[i] !== null) {
      const index = megoldasMasolat.indexOf(tippMasolat[i]);
      if (index !== -1) {
        feher++;
        megoldasMasolat[index] = null;
      }
    }
  }

 
  const visszajelzes = [];
  for (let i = 0; i < fekete; i++) visszajelzes.push("black");
  for (let i = 0; i < feher; i++) visszajelzes.push("white");
  while (visszajelzes.length < 4) visszajelzes.push("gray");

  this.#visszajelzesListaM[this.#aktualisSorIndex] = visszajelzes;


  this.frissitJatekSort();


  if (fekete === 4) {
    alert("Gratulálok! Kitaláltad!");
  } else if (this.#aktualisSorIndex === 9) {
    alert("Vesztettél! A megoldás: " + this.#generaltLista.join(", "));
  }
}
frissitJatekSort() {
  const jatekter = document.querySelector(".jatekter");
  jatekter.innerHTML = ""; 
  for (let index = 0; index < 10; index++) {
    new JatekSor(this.#visszajelzesListaM[index], this.#tippListaM[index], jatekter);
  }
}


}

