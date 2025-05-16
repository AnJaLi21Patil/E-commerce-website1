let card = document.querySelector(".trend");
let blog = document.querySelector(".trends");
let card2 = document.getElementById("trendSec");
let mainPage = document.querySelector(".main");
let about = document.querySelector(" .About");
let contact = document.querySelector(" .Contact");


function Homes() {
    mainPage.style.display = "flex";
    card.style.display = "block";
    card2.style.display = "block";
    blog.style.display = "block";
    about.style.display = "none";

    document.getElementById("Blog").style.color = "black";
    document.getElementById("Home").style.color = "rgb(4, 138, 138)";
    document.getElementById("shop").style.color = "black";
    document.getElementById("Contact").style.color = "black";
}


function shop() {
    mainPage.style.display = "none";
    about.style.display = "none";
    blog.style.display = "none";
    card.style.display = "block";
    card2.style.display = "block";

    document.getElementById("Blog").style.color = "black";
    document.getElementById("Home").style.color = "black";
    document.getElementById("shop").style.color = "rgb(4, 138, 138)";
    document.getElementById("Contact").style.color = "black";
    document.getElementById("About").style.color = "black";

}

function Blog() {
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "block";
    about.style.display = "none";
contact.style.display="none";

    document.getElementById("Blog").style.color = "rgb(4, 138, 138)";

    document.getElementById("Home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("Contact").style.color = "black";
    document.getElementById("About").style.color = "black";
}

function About() {
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    about.style.display = "block";

    document.getElementById("Blog").style.color = "black";
    document.getElementById("Home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("Contact").style.color = "black";
    document.getElementById("About").style.color = "rgb(2,173,173)";

}
function Contact (){
     mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    contact.style.display="block"


    document.getElementById("Blog").style.color = "black";
    document.getElementById("Home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("Contact").style.color = "black";
    document.getElementById("About").style.color = "black";
    document.getElementById("Contact").style.color = "rgb(2,173,173)";
}

 function show(img){
  let newImg = document.getElementById("newImg");
  console.log(img);
  newImg.src=img.src;
 mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    contact.style.display="none"



  document.querySelector(".cart").style.display="flex"
 }
 function addCart(){
    alert("Added to cart")
    location.reload()
 }
 
 function Back(){
document.querySelector(".cart").style.display = "none";
Homes();
 }