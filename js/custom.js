

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
    

    $(".hideoffices").css("display", "block");
    $(".showoffices").css("display", "none");
    
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

    console.log($("#usa"));

    $("#usa-btn").click(function () {

        console.log("usa");

        if ($("#usa").css("display") == "none")
            $("#usa").css("display", "block");
        else if ($("#usa").css("display") == "block")
            $("#usa").css("display", "none");

    });

    $("#usa-mobile-btn").click(function () {

        console.log("usa");

        if ($("#usa-mobile").css("display") == "none")
            $("#usa-mobile").css("display", "block");
        else if ($("#usa-mobile").css("display") == "block")
            $("#usa-mobile").css("display", "none");

    });
    

    $("#switzerland-btn").click(function () {

        console.log("switzerland");

        if ($("#switcherland").css("display") == "none")
            $("#switcherland").css("display", "block");
        else if ($("#switcherland").css("display") == "block")
            $("#switcherland").css("display", "none");

    });

    $("#switzerland-mb-btn").click(function () {

        console.log("switzerland");

        if ($("#switcherland-mb").css("display") == "none")
            $("#switcherland-mb").css("display", "block");
        else if ($("#switcherland-mb").css("display") == "block")
            $("#switcherland-mb").css("display", "none");

    });


    $("#italy-btn").click(function () {

        if ($("#italy").css("display") == "none")
            $("#italy").css("display", "block");
        else if ($("#italy").css("display") == "block")
            $("#italy").css("display", "none");

    });

    $("#italy-mb-btn").click(function () {

        if ($("#italy-mb").css("display") == "none")
            $("#italy-mb").css("display", "block");
        else if ($("#italy-mb").css("display") == "block")
            $("#italy-mb").css("display", "none");

    });

    
    $("#uae-btn").click(function () {

        if ($("#uae").css("display") == "none")
            $("#uae").css("display", "block");
        else if ($("#uae").css("display") == "block")
            $("#uae").css("display", "none");

    });


    $("#uae-mb-btn").click(function () {

        if ($("#uae-mb").css("display") == "none")
            $("#uae-mb").css("display", "block");
        else if ($("#uae-mb").css("display") == "block")
            $("#uae-mb").css("display", "none");

    });

    $("#norilsk-btn").click(function () {

        if ($("#norilsk").css("display") == "none")
            $("#norilsk").css("display", "block");
        else if ($("#norilsk").css("display") == "block")
            $("#norilsk").css("display", "none");

    });

    $("#norilsk-mb-btn").click(function () {

        if ($("#norilsk-mb").css("display") == "none")
            $("#norilsk-mb").css("display", "block");
        else if ($("#norilsk-mb").css("display") == "block")
            $("#norilsk-mb").css("display", "none");

    });


    $("#russia1-btn").click(function () {

        if ($("#russia1").css("display") == "none")
            $("#russia1").css("display", "block");
        else if ($("#russia1").css("display") == "block")
            $("#russia1").css("display", "none");

    });

    $("#russia1-mb-btn").click(function () {

        if ($("#russia1-mb").css("display") == "none")
            $("#russia1-mb").css("display", "block");
        else if ($("#russia1-mb").css("display") == "block")
            $("#russia1-mb").css("display", "none");

    });



    $("#russia2-btn").click(function () {

        if ($("#russia2").css("display") == "none")
            $("#russia2").css("display", "block");
        else if ($("#russia2").css("display") == "block")
            $("#russia2").css("display", "none");

    });

    $("#russia2-mb-btn").click(function () {

        if ($("#russia2-mb").css("display") == "none")
            $("#russia2-mb").css("display", "block");
        else if ($("#russia2-mb").css("display") == "block")
            $("#russia2-mb").css("display", "none");

    });


    $("#russia3-btn").click(function () {

        if ($("#russia3").css("display") == "none")
            $("#russia3").css("display", "block");
        else if ($("#russia3").css("display") == "block")
            $("#russia3").css("display", "none");

    });

    $("#russia3-mb-btn").click(function () {

        if ($("#russia3-mb").css("display") == "none")
            $("#russia3-mb").css("display", "block");
        else if ($("#russia3-mb").css("display") == "block")
            $("#russia3-mb").css("display", "none");

    });


    $("#china-btn").click(function () {

        if ($("#china").css("display") == "none")
            $("#china").css("display", "block");
        else if ($("#china").css("display") == "block")
            $("#china").css("display", "none");

    });


    $("#china-mb-btn").click(function () {

        if ($("#china-mb").css("display") == "none")
            $("#china-mb").css("display", "block");
        else if ($("#china-mb").css("display") == "block")
            $("#china-mb").css("display", "none");

    });


    $("#korea-btn").click(function () {

        if ($("#korea").css("display") == "none")
            $("#korea").css("display", "block");
        else if ($("#korea").css("display") == "block")
            $("#korea").css("display", "none");

    });

    $("#korea-mb-btn").click(function () {

        if ($("#korea-mb").css("display") == "none")
            $("#korea-mb").css("display", "block");
        else if ($("#korea-mb").css("display") == "block")
            $("#korea-mb").css("display", "none");

    });


    $("#japan-btn").click(function () {

        if ($("#japan").css("display") == "none")
            $("#japan").css("display", "block");
        else if ($("#japan").css("display") == "block")
            $("#japan").css("display", "none");

    });

    $("#japan-mb-btn").click(function () {

        if ($("#japan-mb").css("display") == "none")
            $("#japan-mb").css("display", "block");
        else if ($("#japan-mb").css("display") == "block")
            $("#japan-mb").css("display", "none");

    });


    $("#philippines-btn").click(function () {

        if ($("#philippines").css("display") == "none")
            $("#philippines").css("display", "block");
        else if ($("#philippines").css("display") == "block")
            $("#philippines").css("display", "none");

    });

    $("#philippines-mb-btn").click(function () {

        if ($("#philippines-mb").css("display") == "none")
            $("#philippines-mb").css("display", "block");
        else if ($("#philippines-mb").css("display") == "block")
            $("#philippines-mb").css("display", "none");

    });
    
}

var toggleIn = function () {
    
    console.log("toggleIn");

    var $block = $("#usa-block");

    $("#usa-toggle").click(function () {

        $block.toggleClass("show");

        // console.log($("#team-toggle").css("background-color"));
        
    });


    var $block1 = $("#switzerland-block");

    $("#switzerland-toggle").click(function () {
        $block1.toggleClass("show");

        // console.log($("#team-toggle").css("background-color"));
        
    });


    
    var $block2 = $("#italy-block");

    $("#italy-toggle").click(function () {
        $block2.toggleClass("show");

        // console.log($("#team-toggle").css("background-color"));
        
    });



    var $block3 = $("#philippines-block");

        $("#philippines-toggle").click(function () {
        $block3.toggleClass("show");

        // console.log($("#team-toggle").css("background-color"));
        
    });

    var $block4 = $("#russia-block");

    console.log("russia");

    $("#russia-toggle").click(function () {
        $block4.toggleClass("show");

        // console.log($("#team-toggle").css("background-color"));
        
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


var redirectCountry = function () {

    console.log(window.location.href);
    console.log(window.location);


    if (window.location.href.includes("index.html")) {

        window.location = "index.kr.html";
    } else if (window.location.href.includes("about.html")) {

        window.location = "about.kr.html";
    } else if (window.location.href.includes("contact.html")) {

        window.location = "contact.kr.html";
    } 
    else if (window.location.href.includes("news.html")) {

        window.location = "news.kr.html";
    } 
    else if (window.location.href.includes("team.html")) {

        window.location = "team.kr.html";
    } 
    else if (window.location.href.includes("newsroom.html")) {

        window.location = "newsroom.kr.html";
    } 
    else if (window.location.href.includes("why.html")) {

        window.location = "why.kr.html";
    } else if (window.location.href === "http://bitriverkorea.com/" || 
        window.location.href === "http://bitriverkorea.com" || 
        window.location.href === "https://bitriverkorea.com/" || 
        window.location.href === "https://bitriverkorea.com") {

        window.location = "http://bitriverkorea.com/index.kr.html";
    } 
    

}


var openNav = function () {
    

    console.log(document.getElementById("myNav").style.width);

     if (document.getElementById("myNav").style.width == "100%")
        document.getElementById("myNav").style.width = "0%";
     else if (document.getElementById("myNav").style.width == "0%" || 
        document.getElementById("myNav").style.width == "")
     document.getElementById("myNav").style.width = "100%";
}


var closeNav = function () {
    document.getElementById("myNav").style.width = "0%";
}




window.showAllOffices = showAllOffices;
window.hideAllOffices = hideAllOffices;
window.showDataCenters = showDataCenters;
window.showOffices = showOffices;
window.openNav = openNav;
window.closeNav = closeNav;


/* DOCUMENT READY */

dotsClickedFunctions();
toggleIn();

showAllOffices();

// redirectCountry();

navigationOpen();


})(window);