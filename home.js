//Movement
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items to be popped
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const sizes = document.querySelector(".sizes");
const description = document.querySelector(".info h3");


//Moving Animation
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth/2-e.pageX)/20;
    let yAxis = (window.innerHeight/2-e.pageY)/20;
    card.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})
//Animate IN
container.addEventListener("mouseenter", (e) => {
    card.style.transform="none";
    //3D Popout
    title.style.transform="translateZ(125px)";
    sneaker.style.transform="translateZ(150px) rotateZ(-45deg)";
    purchase.style.transform="translateZ(75px)";
    sizes.style.transform="translateZ(100px)";
    description.style.transform="translateZ(125px)";
})

//Animate out
container.addEventListener("mouseleave", (e) => {
    card.style.transform="all 0.5s ease";
    card.style.transform=`rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform="translateZ(0px)";
    sneaker.style.transform="translateZ(0px) rotateZ(0deg)";
    purchase.style.transform="translateZ(0px)";
    sizes.style.transform="translateZ(0px)";
    description.style.transform="translateZ(0px)";
})