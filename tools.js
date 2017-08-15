///////////////////////////////////////////////////////////////////////////////
//
// tools.js provides various miscelaneous javascript tools which may be of
// value when writing further code in the future
//
///////////////////////////////////////////////////////////////////////////////


// function to sum the contents of an array
function sumArray(arr) {
  var result = 0;
  for(var i=0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

// function to evaluate whether or not an element is included in the array
// returns true or false
function includes(value, array) {
  return array.indexOf(value) > -1;
}
