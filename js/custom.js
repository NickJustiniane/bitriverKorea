

(function (window) {

    

var showAllOffices = function () {

    $("#usa").css("display", "none");
    $("#switcherland").css("display", "none");
    $("#italy").css("display", "none");
    $("#norilsk").css("display", "none");
    $("#russia1").css("display", "none");    
    $("#russia2").css("display", "none");   
    $("#russia3").css("display", "none");  
    $("#china").css("display", "none");  
    $("#korea").css("display", "none");    
    $("#japan").css("display", "none");   
    $("#philippines").css("display", "none");
    $("#uae").css("display", "none");


    
    $("#usa").css("display", "block");
    
    $("#switcherland").css("display", "block");
    
    $("#italy").css("display", "block");
    
    $("#norilsk").css("display", "block");
    
    $("#russia1").css("display", "block");
    
    $("#russia2").css("display", "block");
    
    $("#russia3").css("display", "block");
    
    $("#china").css("display", "block");
    
    $("#korea").css("display", "block");
    
    $("#japan").css("display", "block");
    
    $("#philippines").css("display", "block");

    $("#uae").css("display", "block");
    

    if ($(".showoffices").css("display") == "block")
    {
        $(".hideoffices").css("display", "none");
    }
    else if ($(".showoffices").css("display") == "none") {
        $(".hideoffices").css("display", "block");
    }

}

var hideAllOffices = function () {

    $("#usa").css("display", "none");
    $("#switcherland").css("display", "none");
    $("#italy").css("display", "none");
    $("#norilsk").css("display", "none");
    $("#russia1").css("display", "none");    
    $("#russia2").css("display", "none");   
    $("#russia3").css("display", "none");  
    $("#china").css("display", "none");  
    $("#korea").css("display", "none");    
    $("#japan").css("display", "none");   
    $("#philippines").css("display", "none");
    $("#uae").css("display", "none");
    
   
    $(".showoffices").css("display", "block");
    $(".hideoffices").css("display", "none");

}

var showDataCenters = function () {
    
    $("#usa").css("display", "none");
    $("#switcherland").css("display", "none");
    $("#italy").css("display", "none");
    $("#norilsk").css("display", "none");
    $("#russia1").css("display", "none");    
    $("#russia2").css("display", "none");   
    $("#russia3").css("display", "none");  
    $("#china").css("display", "none");  
    $("#korea").css("display", "none");    
    $("#japan").css("display", "none");   
    $("#philippines").css("display", "none");
    $("#uae").css("display", "none");
    
    
    $("#norilsk").css("display", "block");
    
    $("#russia1").css("display", "block");
    
    $("#russia2").css("display", "block");
    
    $("#russia3").css("display", "block");


    $(".showoffices").css("display", "none");
    $(".hideoffices").css("display", "block");
    

}


var showOffices = function () {

    $("#usa").css("display", "none");
    $("#switcherland").css("display", "none");
    $("#italy").css("display", "none");
    $("#norilsk").css("display", "none");
    $("#russia1").css("display", "none");    
    $("#russia2").css("display", "none");   
    $("#russia3").css("display", "none");  
    $("#china").css("display", "none");  
    $("#korea").css("display", "none");    
    $("#japan").css("display", "none");   
    $("#philippines").css("display", "none");
    $("#uae").css("display", "none");
    
    
    $("#usa").css("display", "block");
    
    $("#switcherland").css("display", "block");
    
    $("#italy").css("display", "block");
    
    $("#china").css("display", "block");
    
    $("#korea").css("display", "block");
    
    $("#japan").css("display", "block");
    
    $("#philippines").css("display", "block");

    $("#uae").css("display", "block");
    


    $(".showoffices").css("display", "none");
    $(".hideoffices").css("display", "block");
}


var dotsClickedFunctions = function () {

    $("#usa-btn").click(function () {

        if ($("#usa").css("display") == "none")
            $("#usa").css("display", "block");
        else if ($("#usa").css("display") == "block")
            $("#usa").css("display", "none");

    });


    $("#switzerland-btn").click(function () {

        if ($("#switcherland").css("display") == "none")
            $("#switcherland").css("display", "block");
        else if ($("#switcherland").css("display") == "block")
            $("#switcherland").css("display", "none");

    });


    $("#italy-btn").click(function () {

        if ($("#italy").css("display") == "none")
            $("#italy").css("display", "block");
        else if ($("#italy").css("display") == "block")
            $("#italy").css("display", "none");

    });


    $("#norilsk-btn").click(function () {

        if ($("#norilsk").css("display") == "none")
            $("#norilsk").css("display", "block");
        else if ($("#norilsk").css("display") == "block")
            $("#norilsk").css("display", "none");

    });


    $("#russia1-btn").click(function () {

        if ($("#russia1").css("display") == "none")
            $("#russia1").css("display", "block");
        else if ($("#russia1").css("display") == "block")
            $("#russia1").css("display", "none");

    });


    $("#russia2-btn").click(function () {

        if ($("#russia2").css("display") == "none")
            $("#russia2").css("display", "block");
        else if ($("#russia2").css("display") == "block")
            $("#russia2").css("display", "none");

    });


    $("#russia3-btn").click(function () {

        if ($("#russia3").css("display") == "none")
            $("#russia3").css("display", "block");
        else if ($("#russia3").css("display") == "block")
            $("#russia3").css("display", "none");

    });


    $("#china-btn").click(function () {

        if ($("#china").css("display") == "none")
            $("#china").css("display", "block");
        else if ($("#china").css("display") == "block")
            $("#china").css("display", "none");

    });


    $("#korea-btn").click(function () {

        if ($("#korea").css("display") == "none")
            $("#korea").css("display", "block");
        else if ($("#korea").css("display") == "block")
            $("#korea").css("display", "none");

    });


    $("#japan-btn").click(function () {

        if ($("#japan").css("display") == "none")
            $("#japan").css("display", "block");
        else if ($("#japan").css("display") == "block")
            $("#japan").css("display", "none");

    });


    $("#philippines-btn").click(function () {

        if ($("#philippines").css("display") == "none")
            $("#philippines").css("display", "block");
        else if ($("#philippines").css("display") == "block")
            $("#philippines").css("display", "none");

    });

    $("#uae-btn").click(function () {

        if ($("#uae").css("display") == "none")
            $("#uae").css("display", "block");
        else if ($("#uae").css("display") == "block")
            $("#uae").css("display", "none");

    });


}

var toggleIn = function () {
    
    console.log("toggleIn");

    var $block = $("#usa-block");

    $("#usa-toggle").click(function () {
        $block.toggleClass("show");

        console.log($("#team-toggle").css("background-color"));
        
    });


    var $block1 = $("#switzerland-block");

    $("#switzerland-toggle").click(function () {
        $block1.toggleClass("show");

        console.log($("#team-toggle").css("background-color"));
        
    });


    
    var $block2 = $("#italy-block");

    $("#italy-toggle").click(function () {
        $block2.toggleClass("show");

        console.log($("#team-toggle").css("background-color"));
        
    });



    var $block3 = $("#philippines-block");

    $("#philippines-toggle").click(function () {
        $block3.toggleClass("show");

        console.log($("#team-toggle").css("background-color"));
        
    });

}


var showSlides = function () {

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

}





window.showAllOffices = showAllOffices;
window.hideAllOffices = hideAllOffices;
window.showDataCenters = showDataCenters;
window.showOffices = showOffices;


/* DOCUMENT READY */

dotsClickedFunctions();
toggleIn();
// showSlides();

})(window);