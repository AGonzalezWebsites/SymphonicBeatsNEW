var animateHTML = function() {
  var elems;
  var windowHeight;
  function init() {
    elems = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }
  function addEventHandlers() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  }
  function checkPosition() {
    for (var i = 0; i < elems.length; i++) {
      var positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace('hidden','fade-in');
      }
    }
  }
  return {
    init: init
  };
};
animateHTML().init();










/*NEW SCRIPT*/     
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 905 || document.documentElement.scrollTop > 905) {
    document.getElementById("upArrow").style.display = "block";
      document.getElementById("topBar").style.display = "none";
      document.getElementById("topBarContainerHidden").style.display = "block";
  } else {
    document.getElementById("upArrow").style.display = "none";
      document.getElementById("topBar").style.display = "block";
    document.getElementById("topBarContainerHidden").style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
    element.style.opacity = 0.5;
}  


function loadBeatsA() {
    document.getElementById("beatLoad1").style.display = "block";
}
