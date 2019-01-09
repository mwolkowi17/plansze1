const newImage = document.createElement('img');
newImage.width = 1240;
newImage.height = 595;
newImage.src = "pytanie2.jpg" //podajemy jego src


document.querySelector('#obrazek').appendChild(newImage);
var a = document.querySelector('.pagination-link');
a.classList.add("is-current");

function drugi() {
    newImage.src = "pytanie3.jpg";
    document.querySelector('.is-current').classList.remove('is-current');
    b.classList.add("is-current");
}

var b = document.getElementById("dwa");
b.onclick = drugi;
var lista = document.querySelectorAll('.pagination-link');

function pierwszy() {
    newImage.src = "pytanie2.jpg";
    document.querySelector('.is-current').classList.remove('is-current');
    a.classList.add("is-current");
}

a.onclick = pierwszy;

function trzeci() {
    newImage.src = "pytanie1.jpg";
    document.querySelector('.is-current').classList.remove('is-current');
    c.classList.add("is-current");
}
var c = document.getElementById("trzy");
c.onclick = trzeci;

function czwarty() {
    newImage.src = "pytanie4.jpg";
    document.querySelector('.is-current').classList.remove('is-current');
    d.classList.add("is-current");
}
var d = document.getElementById("cztery");
d.onclick = czwarty;

function piaty() {
    newImage.src = "pytanie5.jpg";
    document.querySelector('.is-current').classList.remove('is-current');
    e.classList.add("is-current");
}
var e = document.getElementById("piec");
e.onclick = piaty;

var menu = document.querySelector(".navigation-toggle");

function wybor() {
    document.querySelector("body").classList.toggle('navigation-show');
}

menu.onclick = wybor;

var aa = document.getElementById("p1");
var bb = document.getElementById("p2");
var cc = document.getElementById("p3");
var dd = document.getElementById("p4");
var ee = document.getElementById("p5");

aa.onclick = pierwszy;
bb.onclick = drugi;
cc.onclick = trzeci;
dd.onclick = czwarty;
ee.onclick = piaty;
