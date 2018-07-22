// Check that the API is working
const request = require('request');

let url = "https://jsonplaceholder.typicode.com/posts/1";

request(url, function (err, response, body) {
    if(err){
        console.log('error:', error);
    } else {
        //console.log('body:', body);
        let data = JSON.parse(body)
        let message = `It's a warm day here and user number ${data.userId} is saying ${data.title}`
        console.log(message);
    }
});

