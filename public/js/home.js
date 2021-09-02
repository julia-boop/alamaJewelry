window.addEventListener('load', () => {
    let arg = document.querySelector('#header-arg')
    let int =  document.querySelector('#header-int')
    let logo = document.querySelector('.logo')

    if(window.innerWidth <= 760){
        arg.innerHTML = 'Shop <br> Argentina'
        int.innerHTML = 'Shop <br> Internacional'
        logo.innerHTML = '<img src="/img/logoAlta.png" alt="">'
    }
    if(window.innerWidth > 760) {
        arg.innerHTML = 'Shop Argentina'
        int.innerHTML = 'Shop Internacional'
        logo.innerHTML = '<img src="/img/logo1.png" alt="">'
    }
})