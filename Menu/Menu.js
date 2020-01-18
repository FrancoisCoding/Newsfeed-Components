const toggleMenu = () => {
    // Toggle the "menu--open" class on your menu refence. 
    menu[0].classList.toggle('menu--open')
}

// Start Here: Create a reference to the ".menu" class
const menu = document.getElementsByClassName("menu");
menu[0].classList.add('menu');


// create a reference to the ".menu-button" class
var menuButton = document.getElementsByClassName("menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton[0].onclick = function () {
    toggleMenu();
}