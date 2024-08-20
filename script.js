var n=document.getElementById("no");
var y=document.getElementById("yes");
var c=document.querySelector(".carre");
var r1=document.querySelector(".rond1");
var r2=document.querySelector(".rond2");
var heart =document.querySelector(".coeur");
var main=document.querySelector("#m");
var body=document.querySelector("#b");
var nvfont=document.querySelector(".glowing");
var mus=document.querySelector("#music");
y.addEventListener('click',ok);
let gif=document.querySelector(".tenor-gif-embed");



 function ok(){
if(mus.paused){
    mus.play();
    if(!rage.paused){
        rage.pause();
       }
}
    c.style='background:purple';
    r1.style='background:purple';
    r2.style='background:purple';
    heart.style='background:transparent';
   body.style='background:black';
   main.style.display="none"
   gif.style.display="block";
    nvfont.style.display="block";
//     const img = document.createElement('img');
// img.src = 'https://tenor.com/fr/view/dancing-cat-cat-dance-funny-cat-memes-dance-funny-gif-65138452807201719'; // replace with the actual image URL

// img.alt='your image';
// // Append the image to the desired container element

// img.width=300;
// img.height=200
// body.appendChild(img);
}

n.addEventListener('mouseover',notokey);
function  notokey(){
    
   if(rage.paused){
    rage.play();
   }
    c.style='background:silver';
    r1.style='background:silver';
    r2.style='background:silver';
    heart.style='background:purple';
    
    let n1 =Math.ceil(Math.random()*300);
    let n2 =Math.ceil(Math.random()*300);
    n.style.top =`${n1}px`;
    n.style.right =`${n2}px`;
    
}
n.addEventListener("click",f);
function f(){
    
    if(rage.paused){
        rage.play();
       }
main.style.display="none";
body.style.background="red";
body.innerHTML="fuck u"
body.style.fontSize="10rem";
body.style.fontWeight="bold";
const img = document.createElement('img');
img.src = 'cat.jpg'; // replace with the actual image URL
img.alt = 'Your image alt text'; // optional

// Append the image to the desired container element
body.appendChild(img); // or main.appendChild(img), depending on where you want to add the image
}
