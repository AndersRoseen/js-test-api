const express = require('express')
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    res.render('index', {message: null, error: null});
})

app.post('/', function (req, res) {
    let dummyid = req.body.dummyid;
    let url = `https://jsonplaceholder.typicode.com/posts/${dummyid}`;

    request(url, function (err, response, body) {
        if(err){
          res.render('index', {message: null, error: 'Error, please try again'});
        } else {
            let data = JSON.parse(body)
            if(data.title == undefined || data.id == undefined){
                res.render('index', {message: null, error: 'Error, please try again'});
            } else {
                let dummytext = `It's a warm day here and user number ${data.id} is saying ${data.title}`
                res.render('index', {message: dummytext, error: null});
            }
        }
    });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})