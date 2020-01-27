import $ from 'jquery'


// Esta função serve para inserir na DOM as mensagens de erro de acordo com o retorno da API.
function ErrorResponse(){
    let erroIcon = $('<i class="material-icons">error</i>')
    this.message = (error)=>{
        console.log(error)
        if(error == "Invalid Name"){
            $('.form-alert').children().last().html('Please your full name.').prepend(erroIcon)
            $('.form-alert').fadeIn(200)
        } else if(error == "Invalid Email"){
            $('.form-alert').children().last().html('Please provide a valid e-mail.').prepend(erroIcon)
            $('.form-alert').fadeIn(200)
        } else {
            $('.form-alert').children().last().html('An error has occurred, please try again.').prepend(erroIcon)
            $('.form-alert').fadeIn(200)
        }                                                  
    }
}

export default ErrorResponse