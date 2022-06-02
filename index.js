
let stars = document.querySelector(".stars-img");
let mainPlanet = document.querySelector(".main-planet");
let bgBackLeft = document.querySelector(".main-back-left");
let bgBackRight = document.querySelector(".main-back-right");
let bgText = document.querySelector(".welcome-text");
let bgBtnLeft = document.querySelector(".welcome-btn-left");
let bgBtnRight = document.querySelector(".welcome-btn-right");
let bgFront = document.querySelector(".main-front");

window.addEventListener("scroll", function(){
  let value = window.scrollY;
  stars.style.left = value * 0 + "px";
  mainPlanet.style.top = value * 1.05 + "px";
  bgBackLeft.style.top = value * 0.5 + "px";
  bgBackRight.style.top = value * 0.5 + "px";
  bgFront.style.top = value * 0 + "px";
  bgText.style.top = value * 1.5 + "px";
  bgBtnLeft.style.right = value * 1.5 + "px";
  bgBtnRight.style.marginRight = value * 1.5 + "px";

})


// $(document).mousemove(function(e) {
//     $(".team-spaceship").css({
//       left: e.pageX,
//       top: e.pageY
//     });
//   });


//https://www.superhi.com/video/smooth-movements-with-javascript

const follow = document.querySelector(".team-spaceship");

let mouseX = 0;
let mouseY = 0;

let followX = 0;
let followY = 0;

let speed = 0.02;


function animate(){
  
  let distX = mouseX - followX;
  let distY = mouseY - followY;
  
  
  followX = followX + (distX * speed);
  followY = followY + (distY * speed);
  
  follow.style.left = followX + "px";
  follow.style.top = followY + "px";
  
  requestAnimationFrame(animate);
}
animate();

document.addEventListener("mousemove", function(event){
  mouseX = event.pageX;
  mouseY = event.pageY;
})


