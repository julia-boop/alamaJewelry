window.addEventListener('load', () => {
    let arg = document.querySelector('#header-arg')
    let eu =  document.querySelector('#header-eu')
    let logo = document.querySelector('.logo')

    if(window.innerWidth <= 760){
        arg.innerHTML = 'shop arg'
        eu.innerHTML = 'shop eu'
        logo.innerHTML = '<img src="/img/logoAlta.png" alt="">'
    }
    if(window.innerWidth > 760) {
        arg.innerHTML = 'shop argentina'
        eu.innerHTML = 'shop europe'
        logo.innerHTML = '<img src="/img/logo1.png" alt="">'
    }
})