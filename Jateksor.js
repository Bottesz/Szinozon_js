import Tipp from "./Tipp.js";
import Visszajelzes from "./Visszajelzes.js";

export default class JatekSor {
    #tippLista=[]; 
    #visszajelzesLista=[]; 
    #szElem; 

    constructor(tippLista, visszajelzesLista, szElem) {
        this.#tippLista = tippLista; 
        this.#visszajelzesLista = visszajelzesLista; 
        this.#szElem = szElem; 
        this.#megjelenit();
    }

    #megjelenit() {
        let html=`<div class="jateksor"></div>`;
        this.#szElem.insertAdjacentHTML("beforeend", html);
        this.sorszElem =document.querySelector(".jatekter.jateksor:last-child");
        new Visszajelzes(this.#visszajelzesLista, this.sorszElem);
        new Tipp(this.#tippLista, this.sorszElem);
    }
}