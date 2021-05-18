// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

ga('send', {
    hitType: 'pageview',
    page: location.pathname
});

document.querySelector('.menu-lista-contato').addEventListener('click', onClickContato);
document.querySelector('.menu-lista-download').addEventListener('click', onClickDownload);
document.querySelectorAll('.card-montadoras').forEach((element) => {
    element.addEventListener('click', (event) => onClickMontadora(event, element));
});
document.querySelectorAll('.contato input').forEach((element) => {
    element.addEventListener('focusout', (event) => onFocusOutContato(event, element));
});
document.querySelector('.contato').addEventListener('submit', onFocusOutContato);

function onClickContato(event) {
    ga('send', {
            hitType: 'event',
            eventCategory: 'menu',
            eventAction: 'entre_em_contato',
            eventLabel: 'link_externo'
    });
}

function onClickDownload(event) {
    ga('send', {
        hitType: 'event',
        eventCategory: 'menu',
        eventAction: 'download_pdf',
        eventLabel: 'download_pdf'
    });
}

function onClickMontadora(event, element) {
    ga('send', {
        hitType: 'event',
        eventCategory: 'analise',
        eventAction: 'ver_mais',
        eventLabel: element.dataset.name
    });
}

function onFocusOutContato(event, element) {
    ga('send', {
        hitType: 'event',
        eventCategory: 'contato',
        eventAction: element.id,
        eventLabel: 'preencheu'
    });
}

function onSubmitContato(event) {
    ga('send', {
        hitType: 'event',
        eventCategory: 'contato',
        eventAction: 'enviado',
        eventLabel: 'enviado'
    });
}
