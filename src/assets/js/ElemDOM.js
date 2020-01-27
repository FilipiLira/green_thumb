import $ from 'jquery'

//Esta função construtora serve para criar elementos DOM com Jquery.
function ElemDOM() {
    this.div = () => {
        return $("<div></div>")
    }

    this.img = () => {
        return $("<img></img>")
    }

    this.p = () => {
        return $("<p></p>")
    }

    this.button = ()=>{
        return $("<button></button>")
    }
}


export default ElemDOM