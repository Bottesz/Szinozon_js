import {szinekLista } from "./listak.js";

export default class Jatek{
    #szElem;

    constructor(generaltLista){
        this.#szElem = generaltLista;
        this.#general();

    }
    
    #general() {
        for(let i = 0; i < 4; i++) {
            const veletlen = Math.floor(Math.random() * szinekLista.length);
            this.#szElem[i] = szinekLista[veletlen];
        }
    
    }

    megjelenit() {
        return this.#szElem;
    }

}
