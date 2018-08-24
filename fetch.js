fetch('https://api.githu.com/users/google/repos')
  .then(function (response) {

    response.json().then(function(json) {
      console.log(json);
    });
  })
  .catch(function(error) {
    console.log('Fetch error');
    console.log(error);
  });