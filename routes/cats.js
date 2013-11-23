exports.findAll = function(req, res) {
    res.send([{name:'cat1'}, {name:'cat2'}, {name:'cat3'}]);
};
 
exports.findById = function(req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
};