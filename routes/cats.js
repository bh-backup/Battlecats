var mongo = require('mongodb');
 
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;
 
var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('battlecatsdb', server);
 
db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'battlecatsdb' database");
        db.collection('cats', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'cats' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
    }
});

exports.findAll = function(req, res) {
    console.log(req);
    db.collection('cats', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving cat: ' + id);
    db.collection('cats', function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });
};

exports.addCat = function(req, res) {
    var cat = req.body;
    console.log('Adding cat: ' + JSON.stringify(cat));
    db.collection('cats', function(err, collection) {
        collection.insert(cat, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
}

exports.updateCat = function(req, res) {
    var id = req.params.id;
    var wine = req.body;
    console.log('Updating cats: ' + id);
    console.log(JSON.stringify(wine));
    db.collection('cats', function(err, collection) {
        collection.update({'_id':new BSON.ObjectID(id)}, cat, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating cats: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(cat);
            }
        });
    });
}

var populateDB = function() {

    var cats = [
    {
        name: 'test cat name'
    }];

    db.collection('cats', function(err, collection) {
        collection.insert(cats, {safe:true}, function(err, result) {});
    });

};