import Vaisius from "./Vaisius.js"
class Krepsys {
    static vaisiai = []

    static pripildyti() {
        Krepsys.vaisiai = [...Array(20).keys()].map(() => new Vaisius())
        Krepsys.vaisiai.sort((a, b) => b.dydis - a.dydis)
    }
    static isimti() {
        const pirmas = Krepsys.vaisiai
        const max = Krepsys.vaisiai[0];
        pirmas.splice(0, 1);
        Krepsys.vaisiai = pirmas;
        return max;
    }
    static papildyti() {

    }
}

export default Krepsys