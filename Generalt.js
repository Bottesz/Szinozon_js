export default class Generalt {
  #generaltLista = [];
  #szElem;
  constructor(generaltLista, szElem) {
    this.#generaltLista = generaltLista;
    this.#szElem = szElem;  
    this.megjelenit();
  }
  
  megjelenit() {
    const html = `
      <div class="visszajelzesek">
        <div class="sor" style="visibility: hidden">
          <div class="elem" style="background-color: ${this.#generaltLista[0]}"></div>
          <div class="elem" style="background-color: ${this.#generaltLista[1]}"></div>
          <div class="elem" style="background-color: ${this.#generaltLista[2]}"></div>
          <div class="elem" style="background-color: ${this.#generaltLista[3]}"></div>
        </div>
      </div>`;
    this.#szElem.insertAdjacentHTML("beforeend", html);
  }
}
