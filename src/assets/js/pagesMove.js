import $ from 'jquery'

// Esta função construtora serve para fazer o movimento das paginas na tela no click dos botões de navegação.
function PagesMove() {

    this.moverDire = (...elements) => {
        this.elementsArray = [...elements]
        this.btn = this.elementsArray[this.elementsArray.length - 3]
        this.cont1 = this.elementsArray[this.elementsArray.length - 2]
        this.cont2 = this.elementsArray[this.elementsArray.length - 1]
        this.elementsArray.pop(this.elementsArray.length - 1)
        this.elementsArray.pop(this.elementsArray.length - 1)
        this.elementsArray.pop(this.elementsArray.length - 1)

        this.elementsArray.forEach((elem) => {
            const donElem = elem.prop('outerHTML')
            const position = elem.offset().left
            const width = $('body').width()

            elem.css('transform', `translateX(-${100 * this.cont1}%)`).css('transition', 'all .8s ease-in-out')
        })
    }

    this.moverEsq = (...elements) => {
        this.elementsArray = [...elements]
        this.btn = this.elementsArray[this.elementsArray.length - 3]
        this.cont1 = this.elementsArray[this.elementsArray.length - 2]
        this.cont2 = this.elementsArray[this.elementsArray.length - 1]
        this.elementsArray.pop(this.elementsArray.length - 1)
        this.elementsArray.pop(this.elementsArray.length - 1)
        this.elementsArray.pop(this.elementsArray.length - 1)

        this.elementsArray.forEach((elem) => {
            const donElem = elem.prop('outerHTML')
            const position = elem.offset().left
            const width = $('body').width()

            elem.css('transform', `translateX(${100 * this.cont2}%)`).css('transition', 'all .8s ease-in-out')
        })
    }
}



const startPage = $('.start-page')
const quizzSun = $('.quizz-sun')
const quizzWater = $('.quizz-water')
const quizzPats = $('.quizz-pats')
const resultsFilter = $('.results-filter')
const buyPage = $('.buy-page')
const EndPage = $('.end-page')

let cont1 = 0
let cont2 = 0 


function Exec(){
    $('.btn-move').each((i, item) => {
   
        if($(item).hasClass('btn-right')){
            $(item).on('click', (e) => {
    
                let btn = $(e.target)
                cont1++
                cont2--
                const move = new PagesMove()
                move.moverDire(startPage, quizzSun, quizzWater, quizzPats, resultsFilter, buyPage, EndPage, btn, cont1, cont2)
            })
        }
    
        if($(item).hasClass('btn-left')){
            $(item).on('click', (e) => {
    
                let btn = $(e.target)
                cont1--
                cont2++
                const move = new PagesMove()
                move.moverEsq(startPage, quizzSun, quizzWater, quizzPats, resultsFilter, buyPage, EndPage, btn, cont1, cont2)
            })
        }
    })
}

new Exec()

export default Exec
