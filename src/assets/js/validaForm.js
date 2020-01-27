import $ from 'jquery'


// Esta função construtora serve para validar os campus do formulário de contato, e retorna um objeto 
// contendo os dados validados para a requisição POST.
function ValidaForm() {
    this.valida = () => {
        let inputNome = $('#inputNome')
        let inputEmail = $('#inputEmail')

        let erroIcon = $('<i class="material-icons">error</i>')

        let labelNome = $('#labelNome')
        let labelEmail = $('#labelEmail')

        let inputNomeValue = inputNome.val().trim()
        let inputEmailValue = inputEmail.val().trim()
        let inputPlantIdValue = $('#inputPlantId').val()

        if (inputNomeValue == '' || inputEmailValue == '') {
            if (inputNomeValue == '') {
                $('.form-alert').children().last().html('Please tell us your name.').prepend(erroIcon)
                $('.form-alert').fadeIn(200)
                inputNome.addClass('alert-input')
                labelNome.css('color', 'red')
            } 
            if (inputEmailValue == '') {
                $('.form-alert').fadeIn(200)
                inputEmail.addClass('alert-input')
                labelEmail.css('color', 'red')
            }
            if(inputNomeValue == '' && inputEmailValue == ''){
                $('.form-alert').children().last().html('Please tell us your name and e-mail').prepend(erroIcon)
            }
        } else {
            return {name: inputNomeValue, email: inputEmailValue, id: inputPlantIdValue}
        }
    }

}


export default ValidaForm