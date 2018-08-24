fetch('https://api.github.com/users/google/repos')
  .then(function (response) {

    const responseClone = response.clone();

    response.json();
    responseClone.json().then(function(json) {
      console.log(json);
    });
  });
