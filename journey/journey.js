/* global $*/
// console.log("hi there");
// $(document).ready(function(){
//     $("#Journey-link").mouseover(function(){
//         console.log("hi man");
//         $("BODY").css("background-color","red");
//     });

// })

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  var revealtwo =document.querySelectorAll(".revealtwo");
  
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 400;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
  
  for (var i = 0; i < revealtwo.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = revealtwo[i].getBoundingClientRect().top;
    var elementVisible = 200;
    if (elementTop < windowHeight - elementVisible) {
      revealtwo[i].classList.add("active");
    } else {
      revealtwo[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);
