const newImage = document.createElement('img');
newImage.width = 1240;
newImage.height = 595;
newImage.src = "pytanie2.jpg" //podajemy jego src

document.querySelector('#obrazek').appendChild(newImage);
var a = document.querySelector('.pagination-link');
a.classList.add("is-current");

function drugi() {
    newImage.src = "pytanie3.jpg";
    document.querySelector('.pagination-link').classList.remove('is-current');
    //a.classList.remove("is-current");
    b.classList.add("is-current");
}

var b = document.getElementById("dwa");
b.onclick = drugi;
var lista = document.querySelectorAll('.pagination-link');

function pierwszy() {
    newImage.src = "pytanie2.jpg";

    for (let i = 0; i < lista.lenght; i++) {
        lista[i].classList.remove('is-current');
        
    };
    //document.querySelector('.pagination-link').classList.remove('is-current');
    //a.classList.remove("is-current");
    a.classList.add("is-current");
}

a.onclick = pierwszy;

function trzeci() {
    newImage.src = "pytanie1.jpg";
}
var c = document.getElementById("trzy");
c.onclick = trzeci;

function czwarty() {
    newImage.src = "pytanie4.jpg";
}
var d = document.getElementById("cztery");
d.onclick = czwarty;

function piaty() {
    newImage.src = "pytanie5.jpg";
}
var e = document.getElementById("piec");
e.onclick = piaty;
