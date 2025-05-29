export default class Visszajelzes {
    #visszajelzesLista = [];
    #szElem;
    constructor(visszajelzesLista, szElem) {
      this.#visszajelzesLista = visszajelzesLista;
      this.#szElem = szElem;
      this.#megjelenit();
    }
  
    #megjelenit() {
      let html = `<div class="visszajelzes">
                    <div class="vElem" style="background-color:${this.#visszajelzesLista[0]}"}></div>
                    <div class="vElem" style="background-color:${this.#visszajelzesLista[1]}"}></div>
                    <div class="vElem" style="background-color:${this.#visszajelzesLista[2]}"}></div>
                    <div class="vElem" style="background-color:${this.#visszajelzesLista[3]}"}></div>
                  </div>`;
  
      this.#szElem.insertAdjacentHTML("beforeend", html);
    }
  }
  