import Tipp from "./Tipp.js";
import Visszajelzes from "./Visszajelzes.js";

export default class JatekSor {
    #tippLista; 
    #visszajelzesLista; 
    #szElem; 

    constructor(tippLista, visszajelzesLista, szElem) {
        this.#tippLista = tippLista; 
        this.#visszajelzesLista = visszajelzesLista; 
        this.#szElem = szElem; 
    }

    megjelenites() {
        
        this.#szElem.innerHTML = "";

        
        this.#tippLista.forEach((row, rowIndex) => {
            const tippElem = document.createElement("div");
            tippElem.classList.add("sor");

            const visszajelzesElem = document.createElement("div");
            visszajelzesElem.classList.add("visszajelzes");
           
            const tipp = new Tipp(row, tippElem);
            tipp.megjelenit();
            
            const visszajelzes = new Visszajelzes(this.#visszajelzesLista[rowIndex], visszajelzesElem);
            visszajelzes.updateVisszajelzes();

            this.#szElem.appendChild(tippElem);
            this.#szElem.appendChild(visszajelzesElem);
        });
    }
}