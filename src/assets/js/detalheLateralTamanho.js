import $ from 'jquery'

// Nesta função é atribido a linha de detalhe lateral das paginas
// uma altura variável, de acordo com a altura do conteudo da div 
// .container-into de cada pagina.

function datalheLateralTamanho() {
    $('.container-into').each((i, elem) => {

        let sizeContent = $('body').height() // pegando a altura da div que envolve os resultados

        $('.detalhe-lateral').each((i, elem) => {
            if ($(elem).attr('results')) {
                //console.log('teste')
                let datalheLatFilhos = $(elem).children()
                let linha = datalheLatFilhos.last().children()

                $(elem).css('justify-content', 'center!important')
                let sizeLateralLine = (sizeContent * 1.2)
                linha.height(sizeLateralLine)
                linha.css('margin-bottom', `${sizeLateralLine * 0.7}px`)

                if($(elem).hasClass('detalhe-lateral-p')){
                    linha.height(260)
                }


            } else {
                //console.log('teste')
                let datalheLatFilhos = $(elem).children()
                let linha = datalheLatFilhos.last().children()

                $(elem).css('justify-content', 'center!important')
                let sizeLateralLine = (sizeContent * 0.57)
                linha.height(sizeLateralLine)

                if($(elem).hasClass('detalhe-lateral-p')){
                    linha.height(260)
                }
            }
        })
    })
}
datalheLateralTamanho()
setInterval(() => {

}, 1000)