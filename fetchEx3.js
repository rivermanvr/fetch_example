fetch('https://api.github.com/users/google/repos')
  .then(function (response) {
    response.json();
    response.json().then(function(json) {
      console.log(json);
    });
  });
