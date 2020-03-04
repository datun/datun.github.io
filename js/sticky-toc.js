window.onscroll = function() {myFunction()};

var tocItem = document.getElementById("toc-nav");

var sticky = tocItem.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    tocItem.classList.add("sticky")
  } else {
    tocItem.classList.remove("sticky");
  }
} 