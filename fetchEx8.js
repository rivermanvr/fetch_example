fetch('./template.html')
  .then(function (response) {

      return response.text()
  }).then(function(html) {
        document.getElementyId('body').innerHTML = html;
  }).catch(function(error) {
    console.log('Fetch error');
    console.log(error);
  });