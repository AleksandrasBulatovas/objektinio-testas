import Krepsys from "./classes/Krepsys.js";
import Vaisius from "./classes/Vaisius.js"


Krepsys.pripildyti();
console.log(Krepsys);


const vaisiai = new Vaisius();

let isimtas = Krepsys.isimti();
isimtas.prakastas = vaisiai.prakasti();

console.log(isimtas);

const grauztukai = new Map()