
export default class Tipp {
    #tippLista = [];
    #szElem;
    constructor(tippLista, szElem) {
      this.#tippLista = tippLista;
      this.#szElem = szElem;
      this.#megjelenit();
    }
  
    #megjelenit() {
      let html = `<div class="sor">
                    <div class="elem" STYLE="background-color:${this.#tippLista[0]}"}></div>
                    <div class="elem" STYLE="background-color:${this.#tippLista[1]}"}></div>
                    <div class="elem" STYLE="background-color:${this.#tippLista[2]}"}></div>
                    <div class="elem" STYLE="background-color:${this.#tippLista[3]}"}></div>
                  </div>`;
  
      this.#szElem.insertAdjacentHTML("beforeend", html);
    }
  }
  