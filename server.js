var express = require('express');
 
var app = express();
 
app.get('/cats', function(req, res) {
    res.send([{name:'cat1'}, {name:'cat1'}]);
});
app.get('/cats/:id', function(req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
});
 
app.listen(3000);
console.log('Listening on port 3000...');