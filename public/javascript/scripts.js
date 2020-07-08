/**
 * General use javascript utilities for personal page
 */

 /* Return random between min (included) and max (included) */
function random(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function decideImage() 
{
    var img = 1;
    var src = "";

    if(img == 0) {
        src =  "transparent url('https://raw.githubusercontent.com/AlexOberhofer/web-images/master/banner.jpg') 0 0 no-repeat fixed"
    } 

    if(img == 1) {
        src =  "transparent url('https://raw.githubusercontent.com/AlexOberhofer/web-images/master/banner-2.jpg') 0 0 no-repeat fixed"
    }

    if (img == 3) {
        src =  "transparent url('https://raw.githubusercontent.com/AlexOberhofer/web-images/master/banner-3.jpg') 0 0 no-repeat fixed"
    }

    
1

$( "#banner-img" ).css('background', src);

}