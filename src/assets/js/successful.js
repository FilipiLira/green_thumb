import $ from 'jquery'

// Esta função construtora serve para exibir o card de sucesso no envio do formulário de contato.

function Successful() {

    this.message = () => {
        $('.card-plant-form').removeClass('d-flex').removeClass('flex-column').css('display', 'none')
        $('#confirm').css('display', 'flex').css('flex-direction', 'column').addClass('align-items', 'center')
    }
}

export default Successful