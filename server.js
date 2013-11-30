var express = require('express'),
    cats = require('./routes/cats');
 
var app = express();
 app.use(express.bodyParser());
 
app.get('/cats', cats.findAll);
app.get('/cats/:id', cats.findById);
app.post('/cats', cats.addCat);
app.put('/cats/:id', cats.updateCat);
//app.delete('/cats/:id', wine.deleteCat);

app.listen(3000);
console.log('Listening on port 3000...');