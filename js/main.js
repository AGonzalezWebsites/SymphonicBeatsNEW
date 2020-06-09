//if browse beats is clicked, change beats display to block
document.querySelector('#smallLinkBoxA').addEventListener('click', function(){
  document.querySelector('.beatStoreContainer').style.display = 'block';
});


var animateHTML = function() {
  var beatStoreContainer;
  var beatStore;
  var windowHeight;
  beatStoreContainer = document.querySelectorAll('.beatStoreContainer');
  beatStore = document.querySelectorAll('.hidden');
  function init() {
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }
  function addEventHandlers() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  }
  function checkPosition() {
    for (var i = 0; i < beatStore.length; i++) {
      var positionFromTop = beatStore[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        beatStore[i].className = beatStore[i].className.replace('hidden','fade-in');
      }
    }
  }
  return {
    init: init
  };
};
animateHTML();
init();










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
