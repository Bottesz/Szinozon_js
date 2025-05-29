import {visszajelzesLista} from "./listak.js";
export default class Visszajelzes {

    #visszajeltesLista = [];
    #szElem;

    constructor(visszajelzesLista) {
        this.#visszajeltesLista = visszajelzesLista;
        this.#szElem = document.querySelector(".visszajelzes");
    }

    getVisszajelzes(sor, oszlop) {
        return this.#visszajeltesLista [sor][oszlop];
    }

    setVisszajelzes(sor, oszlop, szin) {
        this.#visszajeltesLista [sor][oszlop] = szin;
        this.updateVisszajelzes();
    }

    resetVisszajelzes() {
        for (let i = 0; i < this.#visszajeltesLista .length; i++) {
            for (let j = 0; j < this.#visszajeltesLista [i].length; j++) {
                this.#visszajeltesLista [i][j] = "gray";
            }
        }
        this.updateVisszajelzes();
    }
    updateVisszajelzes() {
        this.#szElem.innerHTML = "";
        this.#visszajeltesLista.forEach((sor) => {
            sor.forEach((szin)=>{
                const vElem=document.createElement("div");
                vElem.classList.add("vElem");
                vElem.style.backgeoudndColor=szin;
                this.#szElem.appendChild(vElem);
            });
            
        });
    }
}
