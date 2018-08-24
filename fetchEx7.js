fetch('./template.html')
  .then(function (response) {

      response.text().then(function(html) {
        console.log(html);
      });
  })
  .catch(function(error) {
    console.log('Fetch error');
    console.log(error);
  });