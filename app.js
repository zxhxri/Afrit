// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.width = "80px";
  } else {
    document.getElementById("header").style.width = "150px";
  }
     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.opacity = "0.7";
  } else {
    document.getElementById("header").style.opacity = "1";
  }
}

