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
  var revealthree =document.querySelectorAll(".revealthree");
  
  
  for (var i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
  
  for (var i = 0; i < revealtwo.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = revealtwo[i].getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      revealtwo[i].classList.add("active");
    } else {
      revealtwo[i].classList.remove("active");
    }
  }
  for (var i = 0; i < revealthree.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = revealthree[i].getBoundingClientRect().top;
    var elementVisible = 300;
    if (elementTop < windowHeight - elementVisible) {
      revealthree[i].classList.add("active");
    } else {
      revealthree[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);
