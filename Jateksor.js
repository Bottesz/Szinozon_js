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
    
    const html = `<div class="jateksor"></div>`;
    this.#szElem.insertAdjacentHTML("beforeend", html);
    
    const jateksorElem = this.#szElem.querySelector(".jateksor:last-child");
    new Visszajelzes(this.#visszajelzesLista, jateksorElem);
    new Tipp(this.#tippLista, jateksorElem);
  }
}
