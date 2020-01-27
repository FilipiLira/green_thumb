import $ from 'jquery'
import ValidaForm from './validaForm'
import Successful from './successful'
import ErrorResponse from './errorResponse'

//Esta função faz a requisição POST para envio dos dados de contato com o comprador, validando o formulário
// e levando em consideração as mensagens de erro da API.

function ReqPost() {
    this.req = () => {
        $('#send').on('click', () => {
            const formData = new ValidaForm().valida()
            let url = `https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service`

            console.log(JSON.stringify(formData))

            let formPost = {
                method: 'POST',
                body: JSON.stringify(formData),
            }

            if (formData)
                fetch(url, formPost)
                    .then(res => {
                        console.log(res.status)
                        if(res.status == 200){
                            new Successful().message()
                        } else {
                            return res.json()
                        }
                    })
                    .then(msg => new ErrorResponse().message(msg.error))
                    .catch(error => {
                        return error
                    })
        })
    }
}

new ReqPost().req()