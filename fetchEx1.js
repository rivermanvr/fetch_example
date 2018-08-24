fetch('https://api.github.com/users/google/repos')
  .then(function (response) {
    console.log(response);
  })