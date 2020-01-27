import $ from 'jquery'


//Esta função serve para atribuir os valores correspondentes a cada input do formulário.
(function form() {
    $('#finaliza-quizz').on('click', () => {

    })

    const inputSun = $('#inputSun')
    const inputWater = $('#inputWater')
    const inputPet = $('#inputPet')

    $('.inputSunBtn').each((i, btn) => {
        $(btn).on('click', (e) => {
            inputSun.val = $(e.currentTarget).attr('val')
        })
    })

    $('.inputWaterBtn').each((i, btn) => {
        $(btn).on('click', (e) => {
            inputWater.val = $(e.currentTarget).attr('val')
            
        })
    })

    $('.inputPetBtn').each((i, btn) => {
        $(btn).on('click', (e) => {
            inputPet.val = $(e.currentTarget).attr('val') == 1 ? true : false
        })
    })
})()