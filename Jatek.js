import JatekSor from "./Jateksor.js";
import Generalt from "./Generalt.js";
import { szinekLista, generaltLista, visszajelzesLista, tippLista } from "./listak.js";


export default class Jatek {
  #szinekLista = [];
  #generaltLista = [];
  #visszajelzesListaM = [];
  #tippListaM = [];
  #jatekter;
 
  constructor() {
    this.#jatekter=document.querySelector(".jatekter");
    this.generaltListaEloallit();
    this.megjelenit()
  }
  megjelenit() {
    new Generalt(this.#generaltLista);
    for (let index = 0; index < 10; index++) {
        new JatekSor(this.#visszajelzesListaM[index], this.#tippListaM[index], this.#jatekter)
    }
  }
  generaltListaEloallit() {
    let szinLista=[...this.#szinekLista]
    szinLista.sort(() => Math.random() - 0.5);
    this.#generaltLista=szinLista.slice(0, 4);
    
  }
  szin1Esemenykezelo() {}
  szin2Esemenykezelo() {}
  szin3Esemenykezelo() {}
  szin4Esemenykezelo() {}
  szin5Esemenykezelo() {}
  szin6Esemenykezelo() {}
  visszajelzes() {}
}
