const handleClick = () => {
    var menu = document.getElementById('menu_list');
    
    if (menu.classList.contains('nav__items')) {
        menu.classList.remove('nav__items')
    } else {
        menu.classList.add('nav__items');
    }
}

var btn = document.getElementById('menu');
btn.addEventListener('click', handleClick);