import $ from 'jquery'
import ElemDOM from './ElemDOM'

function erroMessage(){
    this.message = (texto)=> $('#container_cards').html(new ElemDOM().p().append(texto).addClass('erro-message'))
}

export default erroMessage