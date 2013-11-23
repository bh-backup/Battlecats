var express = require('express'),
    cats = require('./routes/cats');
 
var app = express();
 
app.get('/cats', cats.findAll);
app.get('/cats/:id', function(req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
});
 
app.listen(3000);
console.log('Listening on port 3000...');