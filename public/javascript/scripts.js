/**
 * General use javascript utilities for personal page
 */

 /* Return random between min (included) and max (included) */
function random(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/* Do the Menu Transformation for mobile */
function doMenuMagic(window, document) {
    document.getElementById('toggle').addEventListener('click', function (e) {
        document.getElementById('tuckedMenu').classList.toggle('custom-menu-tucked');
        document.getElementById('toggle').classList.toggle('x');
    });
}