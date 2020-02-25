navbutton = document.getElementById("nav2top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbutton.style.display = "block";
  } else {
    navbutton.style.display = "none";
  }
}

function smoothTopScroll() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
} 