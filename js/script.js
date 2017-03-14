var slideIndex = 1;



function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("Slide");
     var y=document.getElementsByClassName("daire");
    if (n > x.length) { 
        slideIndex = 1 
    }
    if (n < 1) { 
        slideIndex = x.length 
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        y[i].style.background = 'transparent';
    }
    x[slideIndex - 1].style.display = "block";
  y[slideIndex - 1].style.background='gray';
}

function plusDivs(n) {
    showDivs(slideIndex += n);
  
}
showDivs(slideIndex);