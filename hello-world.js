const http = require('http');
var app = require('express')();

const hostname = '127.0.0.1';
const port = 3000;

app.get('/portfolio/test', (request, response) => {
    response.send("Hit endpoint")
})

app.get('/portfolio/list_user', function (req, res) {
    console.log("Got a GET request for /list_user");
    res.send('Page Listing');
 })

var server = app.listen(8081, hostname, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })