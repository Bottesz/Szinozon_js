import {visszajelzesLista} from "./listak.js";
export default class Visszajelzes {

    #visszajeltesLista = [];
    #szElem;

    constructor(visszajelzesLista) {
        this.#visszajeltesLista = visszajelzesLista;
        this.#szElem = document.querySelector("#visszajelzes");
    }

    getVisszajelzes(sor, oszlop) {
        return this.#visszajeltesLista [sor][oszlop];
    }

    setVisszajelzes(sor, oszlop, szin) {
        this.#visszajeltesLista [sor][oszlop] = szin;
    }

    resetVisszajelzes() {
        for (let i = 0; i < this.#visszajeltesLista .length; i++) {
            for (let j = 0; j < this.#visszajeltesLista [i].length; j++) {
                this.#visszajeltesLista [i][j] = "gray";
            }
        }
    }
}
