function click_menu() {
    
    if (options.style.display == 'block') {
        options.style.display = 'none'
    }
    else {
        options.style.display = 'block'
    }
    
}

function new_windows() {
    if (window.innerWidth >= 769)
        options.style.display = 'block'
    else
        options.style.display = 'none'

}