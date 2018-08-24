fetch('https://api.github.com/users/google/repossss')
  .then(function (response) {

    if (response.ok) {
      response.json().then(function(json) {
        console.log(json);
      });
    } else {
      // do whatever needs to be done as a result of the 404 occurring...
      console.log('just telling you that you got a 404 error')
    }
  })
  .catch(function(error) {
    console.log('Fetch error');
    console.log(error);
  });