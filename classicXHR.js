// classic XHR
// change line 16 in the index.html file to run this code

// note:  we are not handling any errors...

console.log('running script');
request = new XMLHttpRequest();

// if (window.XMLHttpRequest) {
//   request = new XMLHttpRequest();
// } else if (window.ActiveXObject) { // IE
//   try {
//     request = newActiveXObject('Msxml2.XMLHTTP');
//   }
//   catch (e) {
//     try {
//       request = new ActiveXObject('Microsoft.XMLHTTP');
//     }
//     catch (e) {
//       console.log('error: ', e)
//     }
//   }
// }

//open, send.
request.open('GET', 'https://api.github.com/users/google/repos', true);
request.send(null);

request.onreadystatechange = function(state) {
    console.log(JSON.parse(request.response));
}
