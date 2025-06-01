import Tipp from "./Tipp.js";
import Visszajelzes from "./Visszajelzes.js";

export default class JatekSor {
  #tippLista = [];
  #visszajelzesLista = [];
  #szElem;

  constructor(visszajelzesLista, tippLista, szElem) {
    this.#tippLista = tippLista;
    this.#visszajelzesLista = visszajelzesLista;
    this.#szElem = szElem;
    this.#megjelenit();
  }

  #megjelenit() {
    // Új jateksor elem beszúrása a megadott konténerbe
    const html = `<div class="jateksor"></div>`;
    this.#szElem.insertAdjacentHTML("beforeend", html);
    // A frissen beszúrt .jateksor elem kiválasztása
    const jateksorElem = this.#szElem.querySelector(".jateksor:last-child");
    new Visszajelzes(this.#visszajelzesLista, jateksorElem);
    new Tipp(this.#tippLista, jateksorElem);
  }
}
