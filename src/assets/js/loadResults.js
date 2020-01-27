import $ from 'jquery'
import ElemDOM from './ElemDOM'



function Div(){
     div = $("<div></div>")
}

// Esta função construtora serve para montar o card de cada resultado que a API retorna na pesquisa.


function LoadResults() {

    this.load = (plant) => {
       let div_cardPlant = new ElemDOM().div().addClass('card-plant').attr('id', `${plant.id}`)
       let div_imgCardPlant_cP = new ElemDOM().div().addClass('img-card-plant row justify-content-center')
       let img_imgFluid_iCP_iCP = new ElemDOM().img().addClass('img-fluid').attr('src', plant.url).attr('alt', plant.name)
       let div_cardPlantDetails_cP = new ElemDOM().div().addClass('card-plant-details')
       let div_cardPlantTitle_cPD = new ElemDOM().div().addClass('card-plant-title')
       let p_title_cPT = new ElemDOM().p().append(plant.name)
       let div_priceIcons_cPD = new ElemDOM().div().addClass('price-icons row justify-content-between')
       let p_price_pI = new ElemDOM().p().append(`$${plant.price}`)
       let div_div = new ElemDOM().div()

       //Esta faltando os icones
       let img_icon1 = new ElemDOM().img()
       let img_icon2 = new ElemDOM().img()
       let img_icon3 = new ElemDOM().img()

       let removeIcone = false

       plant.water == 'daily'? img_icon1.attr('src','./icons/grey/three-drops.svg' ).css('width', '29px') : plant.water == 'regularly' ? img_icon1.attr('src','./icons/grey/two-drops.svg' ).css('width', '23px') : img_icon1.attr('src','./icons/grey/one-drop.svg' ).css({'width': '17px'}).css({'height': '20px'})
       // Aqui ao selecionar qual icone de sol será exibido, é adicionado na ultima função encadeada .css() a largura de acordo com o tamanho da imagem de icone que seá exibido.

       plant.sun == 'high'? img_icon2.attr('src','./icons/grey/high-sun.svg' ) : plant.sun == 'low' ? img_icon2.attr('src','./icons/grey/low-sun.svg' ) : img_icon2.attr('src','./icons/grey/no-answer.svg' )
       img_icon3.attr('src','./icons/grey/toxic.svg' )

       plant.toxicity ? div_div.append(img_icon3).append(img_icon2).append(img_icon1) : div_div.append(img_icon2).append(img_icon1)


       let div_btnBuy_cP = new ElemDOM().div().addClass('btn-buy')
       let button_btnTheme2 = new ElemDOM().button().addClass('btn-theme2').addClass('btn-move').addClass('btn-right').append('buy now')

       div_imgCardPlant_cP.append(img_imgFluid_iCP_iCP)

       div_cardPlantTitle_cPD.append(p_title_cPT)


       div_priceIcons_cPD.append(p_price_pI).append(div_div) // icones dentro de div_div
       div_cardPlantDetails_cP.append(div_cardPlantTitle_cPD).append(div_priceIcons_cPD)
       div_btnBuy_cP.append(button_btnTheme2)
       
       // incluindo as dives na div card-plant
       div_cardPlant.append(div_imgCardPlant_cP).append(div_cardPlantDetails_cP).append(div_btnBuy_cP)

       $('#container_cards').append(div_cardPlant)
    }
}

export default LoadResults
