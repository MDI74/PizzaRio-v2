var  tm = null;
var img = ["/images/stock.jpg", "/images/stock2.jpg"]; 
var pos = 0;

function slide_show() {
if(pos  >= img.length)
    pos = 0;
document.getElementById("TV").src = img[pos];
pos++;
}

function mode(id) {
if(id == 1)
    tm = setInterval("slide_show()", 4000);
else 
        clearInterval(tm);
}