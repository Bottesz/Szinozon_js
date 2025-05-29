import { tippLista } from "./listak.js";

export default class Tipp {

    #tippLista=[]; 
    #szElem;   

    constructor(tippLista, szElem) {
        this.#tippLista = tippLista;
        this.#szElem = szElem;     
    }

    megjelenit() {
        
        this.#szElem.innerHTML = "";

        
        this.#tippLista.forEach((tipp) => {
            const tippElem = document.createElement("div");
            tippElem.textContent = tipp; 
            tippElem.classList.add("tipp-item");
            this.#szElem.appendChild(tippElem); 
        });
    }
}
