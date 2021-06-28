window.addEventListener('load', () => {
    let arg = document.querySelector('#header-arg')
    let eu =  document.querySelector('#header-eu')

    if(window.innerWidth <= 760){
        arg.innerHTML = 'shop arg'
        eu.innerHTML = 'shop eu'
    }
    if(window.innerWidth > 760) {
        arg.innerHTML = 'shop argentina'
        eu.innerHTML = 'shop europe'
    }
})