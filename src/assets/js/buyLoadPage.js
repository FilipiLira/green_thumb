import $ from 'jquery'
import ElemDOM from './ElemDOM'

// Essa função serve para montar o card de planta na pagina de compra, de acordo com a planta selecionada.

function BuyLoadPage() {
    // Capturando os elementos do card da pagina de compra, que receberam os novos conteudos.
    let cardPlantBuyTitle = $('.card-plant-buy-title')
    let cardPlantBuyPrice = $('.card-plant-buy-price')
    let cardPlantBuyImg = $('.card-plant-buy-img').children()
    let cardPlantBuyIcons = $('.card-plant-buy-icons')
    let inputFormBuy = $('#form-buy').children().first()


    this.loadPage = (arrObj) => {
        $('.btn-buy').each((i, elem) => {

            // Capturando os conteudos do card do botão que foi clicado.
            let cardPlant = $(elem).parent()
            let cardPlantId = cardPlant.attr('id')
            let filhosCardPlant = cardPlant.children()

            // Pegando a imagem
            let imgCardPlant = filhosCardPlant.first()


            // Criando a dive que vai envover os icones
            let div_imgIcon1 = new ElemDOM().div().css('margin', '15px 0 10px 0')
            let div_imgIcon2 = new ElemDOM().div().css('margin', '15px 0 10px 0')
            let div_imgIcon3 = new ElemDOM().div().css('margin', '15px 0 10px 0')

            let img_icon1 = new ElemDOM().img().css('width', '25px').css('margin-right', '10px')
            let img_icon2 = new ElemDOM().img().css('width', '25px').css('margin-right', '10px')
            let img_icon3 = new ElemDOM().img().css('width', '25px').css('margin-right', '10px')

            let text1 = ''
            let text2 = ''
            let text3 = ''


            $(elem).on('click', () => {

                arrObj.forEach(plant => {

                    //Criando as divs que receberão os icones

                    plant.sun == 'high' ? img_icon1.attr('src', './icons/grey/high-sun.svg') : plant.sun == 'low' ? img_icon1.attr('src', './icons/grey/low-sun.svg') : img_icon1.attr('src', './icons/grey/no-answer.svg')
                    plant.water == 'daily' ? img_icon2.attr('src', './icons/grey/three-drops.svg') : plant.water == 'regularly' ? img_icon2.attr('src', './icons/grey/two-drops.svg') : img_icon2.attr('src', './icons/grey/one-drop.svg')
                    plant.toxicity ? img_icon3.attr('src', './icons/grey/toxic.svg') : img_icon3.attr('src', './icons/grey/pet.svg')

                    plant.water == 'daily' ? text1 = 'Water daily' : plant.water == 'regularly' ? text1 = 'Water regularly' : text1 = 'Water rarely'
                    plant.sun == 'high' ? text2 = 'High sunlight' : plant.sun == 'low' ? text2 = 'Low sunlight' : text2 = 'No sunlight'
                    plant.toxicity == true ? text3 = 'Beware! Toxic for pets' : text3 = 'Non-toxic for pets'



                    if (cardPlantId == plant.id) {
                        cardPlantBuyTitle.html(plant.name)
                        cardPlantBuyPrice.html(`$${plant.price}`)
                        cardPlantBuyImg.attr('src', `${plant.url}`)
                        inputFormBuy.val(plant.id)

                        div_imgIcon1.append(img_icon1).append(text1)
                        div_imgIcon2.append(img_icon2).append(text2)
                        div_imgIcon3.append(img_icon3).append(text3)
                        cardPlantBuyIcons.append(div_imgIcon1).append(div_imgIcon2).append(div_imgIcon3)
                        //console.log(plant)
                    }
                })
            })
        })
    }
}

export default BuyLoadPage