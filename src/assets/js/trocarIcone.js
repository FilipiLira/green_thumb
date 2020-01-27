import $ from 'jquery'

//Esta função construtora serve para fazer a troca de icones nas ações de hover e click sobre os botões.

function TrocarSrc() {

    this.trocaSrc = (img, src) => {
        $(img).attr('src', src)
    }
}

(function trocarIcone(btn) {
    let origSrc = '';
    $('.btn-filter').each((i, elem) => {
        if (!$(elem).hasClass('clicado')) {
            $(elem).hover(
                () => {
                    const filhos = $(elem).children()
                    const imgPai = filhos[0]
                    const img = $(imgPai).children()
                    origSrc = $(img).attr('src')
                    let newSrc = $(img).attr('white')
                    new TrocarSrc().trocaSrc(img, newSrc)
                    newSrc = ''
                },

                () => {
                    if (!$(elem).hasClass('clicado')) {
                        const filhos = $(elem).children()
                        const imgPai = filhos[0]
                        const img = $(imgPai).children()
                        new TrocarSrc().trocaSrc(img, origSrc)
                    }
                }
            )
        }
    })

    $('.btn-filter').each((i, elem) => {

        $(elem).click(() => {
            let pai = $(elem).parent()
            if (!$(elem).hasClass('clicado')) {

                $('.btn-filter').each((i, elem2) => {

                    if ($(elem2).attr('index') == pai.attr('index')) {
                        $(elem2).removeClass('clicado')
                        const filhos = $(elem2).children()
                        const imgPai = filhos[0]
                        const img = $(imgPai).children()
                        let origSrc2 = $(img).attr('orange')

                        $(img).attr('src', origSrc2)
                    }
                })

                $(elem).addClass('clicado')


                const filhos = $(elem).children()
                const imgPai = filhos[0]
                const img = $(imgPai).children()
                let newSrc = $(img).attr('white')
                new TrocarSrc().trocaSrc(img, newSrc)
                newSrc = ''
            } else {

                if ($(elem).attr('index') == pai.attr('index')) {

                    const filhos = $(elem).children()
                    const imgPai = filhos[0]
                    const img = $(imgPai).children()
                    origSrc = $(img).attr('orange')
                    new TrocarSrc().trocaSrc(img, origSrc)

                    $(elem).removeClass('clicado')
                }
            }
        })
    })
})()