import Rand from "../utils/Rand.js"

class Vaisius{
    constructor(){
        this.dydis = Rand.random(5, 25)
        this.id = Rand.random(1000000, 9999999)
        this.prakastas = false
    }
    prakasti(){
       return this.prakastas = true
    }


}

export default Vaisius