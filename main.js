import Generalt from "./Generalt.js";
import { generaltLista } from "./listak.js";
import Tipp from "./Tipp.js";
import { tippLista } from "./listak.js";
import JatekSor from "./Jateksor.js";

const jatekterElem = document.querySelector(".jatekter");
const generalt = new Generalt(generaltLista, jatekterElem);
const tipp = new Tipp(tippLista, jatekterElem);
generalt.megjelenit();

for (let i = 0; i < tippLista.length; i++) {
const jatekSor = new JatekSor(tippLista[i], visszajelzesLista[i], jatekterElem);
}