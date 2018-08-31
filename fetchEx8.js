fetch('./template.html')
  .then(function (response) {

      return response.text()
  }).then(function(html) {
        document.getElementById('body').innerHTML = html;
  }).catch(function(error) {
    console.log('Fetch error');
    console.log(error);
  });