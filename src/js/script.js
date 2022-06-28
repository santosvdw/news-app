let mostViewedResponse = fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=3Ne3OobjMQy6G75F9aOUiIOVNwGe50et');

fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=3Ne3OobjMQy6G75F9aOUiIOVNwGe50et')
    .then((response) => {
        return response.json();
        // handle the response
    })
    .then(function (jsonData) {
        console.log(jsonData);
    })
    .catch((error) => {
        return error;
        // handle the error
    });

let homePageResponse = fetch('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=3Ne3OobjMQy6G75F9aOUiIOVNwGe50et');

fetch('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=3Ne3OobjMQy6G75F9aOUiIOVNwGe50et')
    .then((response) => {
        return response.json();
        // handle the response
    })
    .then(function (jsonData) {
        console.log(jsonData);
    })
    .catch((error) => {
        return error;
        // handle the error
    });

console.log(mostViewedResponse.results);
