
export default class Generalt{
    #generaltLista=[];
    #szElem;
    constructor(generaltLista,szElem){
        this.#generaltLista=generaltLista;
        this.#szElem=document.querySelector(".generalt .jatekter");
        this.megjelenit();
    }
    megjelenit(){
        let html = `<div class="visszajelzes"></div>
                    <div class="sor">
                        <div class="elem" style="background-color:${this.#generaltLista[0]}"}></div>
                        <div class="elem" style="background-color:${this.#generaltLista[1]}"}></div>
                        <div class="elem" style="background-color:${this.#generaltLista[2]}"}></div>
                        <div class="elem" style="background-color:${this.#generaltLista[3]}"}></div>
                    </div>`;
        this.#szElem.insertAdjacentHTML("beforeend", html);
        for (let index = 0; index < this.#generaltLista.length; index++) {
            const j = Math.floor(Math.random() * (i + 1));
            [lista[i], lista[j]] = [lista[j], lista[i]]; 
            
        }
    }
}
