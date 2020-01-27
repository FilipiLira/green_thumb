import $ from 'jquery'
import LoadResults from './loadResults'
import ErrorMessage from './errorMessage'
import Exec from './pagesMove'
import BuyLoadPage from './buyLoadPage'

//Esta função construtora faz a requisição GET para pegar os resulados do filtro na API, passando os dados selecionados.

function GetReqData() {
    this.reqs = []
    this.req = (sun, water, pets) => {
        let url = `https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service?sun=${sun}&water=${water}&pets=${pets}`

        fetch(url)
            .then(data => data.json())
            .then(arr => {
                let erroReq = () => new ErrorMessage().message('Ocorreu um erro com a pesquisa. Repita ou tente mais tarde.')
                let carregarDados = () => arr.forEach(plant => { new LoadResults().load(plant) })

                arr.status != 422 ? carregarDados() : erroReq()

                new Exec()

                new BuyLoadPage().loadPage(arr)
            })
            .catch(error => {
                return error
            })
    }
}


const inputSun = $('#inputSun')
const inputWater = $('#inputWater')
const inputPet = $('#inputPet')

$('.inputSunBtn').each((i, btn) => {
    $(btn).on('click', (e) => {
        inputSun.val($(e.currentTarget).attr('val'))
    })
})

$('.inputWaterBtn').each((i, btn) => {
    $(btn).on('click', (e) => {
        inputWater.val($(e.currentTarget).attr('val'))

    })
})

$('.inputPetBtn').each((i, btn) => {
    $(btn).on('click', (e) => {
        inputPet.val($(e.currentTarget).attr('val') == 1 ? true : false) 
    })
})


$('#finaliza-quizz').on('click', () => {
    new GetReqData().req(`${inputSun.val()}`, `${inputWater.val()}`, inputPet.val())
})