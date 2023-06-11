const fs = require("fs");
const users = require("./users.json");

module.exports = function(req, res){
  
    var name =  req.body.name;
    var job =  req.body.job;
    let roles = req.body.roles;
    let id = users.length + 1;
    
    var newUser = {
        id,
        name,
        job,
        roles
    }

    users.push(newUser);

    fs.writeFile("users.json", JSON.stringify(users), err => {
        if (err) throw err;
        res.status(201).send(newUser);
    });
    
    

};