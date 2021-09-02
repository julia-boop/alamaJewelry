window.addEventListener('load', () => {
    let arg = document.querySelector('#header-arg')
    let int =  document.querySelector('#header-int')
    let liArg =  document.querySelector('#header-li-arg')
    let liInt =  document.querySelector('#header-li-int')
    let logo = document.querySelector('.logo')

    if(window.innerWidth <= 760){
        console.log(liArg)
        logo.innerHTML = '<img src="/img/logoAlta.png" alt="">'
        liArg.style.width = '50%'
        liInt.style.width = '50%'
        arg.innerHTML = 'Shop <br> Argentina'
        int.innerHTML = 'Shop <br> Internacional'
    } else if(window.innerWidth > 760) {
        logo.innerHTML = '<img src="/img/logo1.png" alt="">'
        arg.innerHTML = 'Shop Argentina'
        int.innerHTML = 'Shop Internacional'
    }
})