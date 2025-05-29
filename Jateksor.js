import { tippLista, visszajelzesLista } from "./listak.js";

export default class Jateksor {
    #tippLista=[]; 
    #visszajelzesLista=[]; 
    #jatekter; 

    constructor(tippLista, visszajelzesLista, szElem) {
        this.#tippLista = tippLista; 
        this.#visszajelzesLista = visszajelzesLista; 
        this.#jatekter = szElem;
    }

    megjelenit() {
        this.#jatekter.innerHTML = "";

        const tippContainer = document.createElement("div");
        tippContainer.classList.add("tipp-container");
        this.#tippLista.forEach((row) => {
            const rowElem = document.createElement("div");
            rowElem.classList.add("tipp-row");
            row.forEach((tipp) => {
                const tippElem = document.createElement("div");
                tippElem.textContent = tipp;
                tippElem.classList.add("tipp-item");
                rowElem.appendChild(tippElem);
            });
            tippContainer.appendChild(rowElem);
        });
        this.#jatekter.appendChild(tippContainer);

        const visszajelzesContainer = document.createElement("div");
        visszajelzesContainer.classList.add("visszajelzes-container");
        this.#visszajelzesLista.forEach((row) => {
            const rowElem = document.createElement("div");
            rowElem.classList.add("visszajelzes-row");
            row.forEach((visszajelzes) => {
                const visszajelzesElem = document.createElement("div");
                visszajelzesElem.textContent = visszajelzes;
                visszajelzesElem.classList.add("visszajelzes-item");
                rowElem.appendChild(visszajelzesElem);
            });
            visszajelzesContainer.appendChild(rowElem);
        });
        this.#jatekter.appendChild(visszajelzesContainer);
    }
}
