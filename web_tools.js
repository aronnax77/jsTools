///////////////////////////////////////////////////////////////////////////////
//
// web_tools.js provides various miscelaneous tools which may be of value in
// writing further javascript connected with html pages
//
///////////////////////////////////////////////////////////////////////////////


// Perhaps one of the most useful funtions which can be used on almost all web
// page scrips to shorten the code (remenicent of jQery)
funtion _(element) {
  return document.getElementById(element);
}

// function to reload the contents of a web page
function reset() {
  window.location.reload(true);
}

// ****************************************************************************

// Routine which expands a page element
function expand(element) {
  var target = document.getElementById(element);
  var h      = target.offsetHeight;
  var sh     = target.scrollHeight;
  var timerLoop = setInterval(grow, 10);

  function grow() {
    if(h < sh){
      h += 5;
      target.style.height = h + 'px';
    } else {
      clearInterval(timerLoop);
    }
  }

  // Apparently the next line should prevent the link activating
  // in a normal way.  There does not appear to be any difference
  // in the way the page works with or without the line so I left
  // it in as a reminder
  // Note: THAT THE INITIAL SIZE OF THE ELEMENT SHOULD BE SPECIFIED AND
  // OVERFLOW HIDDEN.
  return false;
}

// A routine which retracts or shrinks a page element
function retract(element) {
  var target = document.getElementById(element);
  var h      = target.offsetHeight;
  var timerLoop = setInterval(shrink, 10);

  function shrink() {
    if(h > 0){
      h -= 5;
      target.style.height = h + 'px';
    } else {
      target.style.height = '0px';
      clearInterval(timerLoop);
    }
  }

  // Apparently the next line should prevent the link activating
  // in a normal way.  There does not appear to be any difference
  // in the way the page works with or without the line so I left
  // it in as a reminder
  return false;
}

// ****************************************************************************

// function to change fade in the background colour
// this could be further modified to include a time parameter
function changeBG(el,clr){
	var elem = document.getElementById(el);
	elem.style.transition = "background-color 1.0s linear 0s";
	elem.style.background = clr;
}
