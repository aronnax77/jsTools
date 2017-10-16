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

// function to change fade in the background colour
// this could be further modified to include a time parameter
function changeBG(el,clr){
	var elem = document.getElementById(el);
	elem.style.transition = "background-color 1.0s linear 0s";
	elem.style.background = clr;
}
