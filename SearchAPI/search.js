const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/search.html");
});


app.post("/", function (req, res) {
    const city = req.body.city;
    const item = req.body.item;
    const url = "https://api.spoonacular.com/recipes/search?apiKey=ba9e538a40794072aa094ceccbcaf78c&number=2&query=" + item;
    https.get(url, function (response) {
        //console.log(response.statusCode);
        response.on("data", function (data) {
            const food = JSON.parse(data);
            const name = food.results[0].title;
            console.log(name);
            res.send();

        });
    });
});


//app.post("/", function (req, res) {
//    var item = req.body.item;
//    const url = "https://api.spoonacular.com/recipes/search?apiKey=ba9e538a40794072aa094ceccbcaf78c&number=10&query=" + item;
//    https.get(url, function (response) {
//        console.log(response.statusCode);
//        response.on("data", function (data) {
//            const food = JSON.parse(data);
//            console.log(food);
//            res.send();
//        });
//    });
//});

app.listen(3000, function () {
    console.log("Port 3000 is started");
});


// ba9e538a40794072aa094ceccbcaf78c

// https://api.spoonacular.com/recipes/716429/information?apiKey=ba9e538a40794072aa094ceccbcaf78c&includeNutrition=true
